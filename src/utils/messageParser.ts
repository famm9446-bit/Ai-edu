import { ParsedMessage } from '../types/chat';

export function parseAssistantMessage(text: string): ParsedMessage {
  const trimmed = text.trim();

  // Check if it's an unsupported refusal
  const isRefusal =
    trimmed.includes('Information Not Found') ||
    trimmed.includes('Apologies, the requested information is not available') ||
    trimmed.includes('المعلومات غير متوفرة في المرجع') ||
    trimmed.includes('لا يحتوي المرجع المرفق على معلومات كافية');

  if (isRefusal) {
    return {
      type: 'refusal',
      body: trimmed,
    };
  }

  // Check if it's a Summary format (Rule E)
  const isSummary =
    trimmed.startsWith('Title:') ||
    trimmed.includes('Summary:') ||
    trimmed.startsWith('عنوان:') ||
    trimmed.includes('ملخص:');

  if (isSummary) {
    let title = '';
    let body = trimmed;
    let source = '';
    let pageNumber: number | undefined;

    const titleMatch = trimmed.match(/Title:\s*(.+?)(?:\n|$)/i) || trimmed.match(/عنوان:\s*(.+?)(?:\n|$)/);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }

    const summaryMatch = trimmed.match(/Summary:\s*([\s\S]+?)(?=\nSource:|\nالمصدر:|$)/i) || trimmed.match(/ملخص:\s*([\s\S]+?)(?=\nالمصدر:|$)/);
    if (summaryMatch) {
      body = summaryMatch[1].trim();
    }

    const sourceMatch = trimmed.match(/(?:Source|المصدر):\s*(.+)$/im);
    if (sourceMatch) {
      source = sourceMatch[1].trim();
      const pageMatch = source.match(/Page(?:s)?\s*([0-9]+)/i) || source.match(/صفحة\s*([0-9]+)/);
      if (pageMatch) {
        pageNumber = parseInt(pageMatch[1], 10);
      }
    }

    return {
      type: 'summary',
      title: title || 'Document Summary',
      body: body,
      source: source || undefined,
      pageNumber: pageNumber,
    };
  }

  // Check if it's an Answer format (Rule A)
  const isAnswer =
    trimmed.startsWith('Answer:') ||
    trimmed.includes('Source: Ref.1') ||
    trimmed.startsWith('إجابة:') ||
    trimmed.includes('المصدر: Ref.1');

  if (isAnswer) {
    let body = trimmed;
    let source = '';
    let pageNumber: number | undefined;

    const answerMatch = trimmed.match(/Answer:\s*([\s\S]+?)(?=\nSource:|\nالمصدر:|$)/i) || trimmed.match(/إجابة:\s*([\s\S]+?)(?=\nالمصدر:|$)/);
    if (answerMatch) {
      body = answerMatch[1].trim();
    }

    const sourceMatch = trimmed.match(/(?:Source|المصدر):\s*(.+)$/im);
    if (sourceMatch) {
      source = sourceMatch[1].trim();
      const pageMatch = source.match(/Page(?:s)?\s*([0-9]+)/i) || source.match(/صفحة\s*([0-9]+)/);
      if (pageMatch) {
        pageNumber = parseInt(pageMatch[1], 10);
      }
    }

    return {
      type: 'answer',
      body: body,
      source: source || undefined,
      pageNumber: pageNumber,
    };
  }

  // Extract source from generic message if present
  let pageNumber: number | undefined;
  const genericSourceMatch = trimmed.match(/(?:Source|المصدر):\s*(.+)$/im);
  let sourceText = '';
  if (genericSourceMatch) {
    sourceText = genericSourceMatch[1].trim();
    const pageMatch = sourceText.match(/Page(?:s)?\s*([0-9]+)/i) || sourceText.match(/صفحة\s*([0-9]+)/);
    if (pageMatch) {
      pageNumber = parseInt(pageMatch[1], 10);
    }
  }

  return {
    type: 'generic',
    body: trimmed,
    source: sourceText || undefined,
    pageNumber: pageNumber,
  };
}
