/**
 * Ref.1 — Prompt Engineering in Medical Education
 * Complete authentic text and structural index for factual verification and citation linking.
 * Citation: Heston, T.F.; Khun, C. Prompt Engineering in Medical Education. Int. Med. Educ. 2023, 2, 198–205.
 * DOI: https://doi.org/10.3390/ime2030019
 */

export interface DocumentPage {
  pageNumber: number;
  articlePage: number; // 198 - 205
  title: string;
  sections: string[];
  content: string;
}

export interface DocumentSection {
  id: string;
  title: string;
  pageNumber: number;
  articlePage: number;
  summary: string;
}

export const DOCUMENT_METADATA = {
  id: 'ref1',
  code: 'Ref.1',
  title: 'Prompt Engineering in Medical Education',
  shortTitle: 'Ref.1 — Prompt Engineering in Medical Education',
  authors: 'Thomas F. Heston, Charya Khun',
  affiliations: [
    'Department of Medical Education and Clinical Sciences, Washington State University, Spokane, WA 99210, USA',
    'Department of Family Medicine, University of Washington School of Medicine, Seattle, WA 98195, USA'
  ],
  journal: 'International Medical Education (Int. Med. Educ.)',
  citation: 'Heston, T.F.; Khun, C. Prompt Engineering in Medical Education. Int. Med. Educ. 2023, 2, 198–205.',
  doi: 'https://doi.org/10.3390/ime2030019',
  publishedDate: '31 August 2023',
  receivedDate: '10 July 2023',
  revisedDate: '21 August 2023',
  acceptedDate: '28 August 2023',
  pdfPath: '/assets/aistudio/Ref1_1__391b3188.pdf',
  totalPages: 8,
};

export const DOCUMENT_PAGES: DocumentPage[] = [
  {
    pageNumber: 1,
    articlePage: 198,
    title: 'Page 1 — Abstract & 1. Introduction',
    sections: ['Abstract', 'Keywords', '1. Introduction', '2. Generative Language Models in Medical Education (beginning)'],
    content: `Review
Prompt Engineering in Medical Education
Thomas F. Heston 1,2,* and Charya Khun 1
1 Department of Medical Education and Clinical Sciences, Washington State University, Spokane, WA 99210, USA
2 Department of Family Medicine, University of Washington School of Medicine, Seattle, WA 98195, USA
* Correspondence: tom.heston@wsu.edu

Abstract: Artificial intelligence-powered generative language models (GLMs), such as ChatGPT, Perplexity AI, and Google Bard, have the potential to provide personalized learning, unlimited practice opportunities, and interactive engagement 24/7, with immediate feedback. However, to fully utilize GLMs, properly formulated instructions are essential. Prompt engineering is a systematic approach to effectively communicating with GLMs to achieve the desired results. Well-crafted prompts yield good responses from the GLM, while poorly constructed prompts will lead to unsatisfactory responses. Besides the challenges of prompt engineering, significant concerns are associated with using GLMs in medical education, including ensuring accuracy, mitigating bias, maintaining privacy, and avoiding excessive reliance on technology. Future directions involve developing more sophisticated prompt engineering techniques, integrating GLMs with other technologies, creating personalized learning pathways, and researching the effectiveness of GLMs in medical education.

Keywords: artificial intelligence; large language models; ChatGPT; medical education; prompt engineering

1. Introduction
Generative language models (GLMs) are neural networks trained primarily on language data gathered from the Internet. GLMs are large language models specifically designed to generate high-quality, human-like text. GLMs are built upon a generative pre-trained transformer model (GPT). The first version, GPT-1, was released in 2018 [1]. This version had approximately 117 million parameters utilizing just over 100,000 nodes. Since then, the scale of GPT models has rapidly increased. GPT-2, released in 2019, had around 1.5 billion parameters, followed by GPT-3 in 2020, with 175 billion parameters. The latest version, GPT-4, released in 2023, is estimated to utilize 1 trillion parameters [2].

One notable development in the GPT series is the introduction of GPT-3.5, which includes an online chat interface. OpenAI introduced ChatGPT in 2022, allowing users to interact directly with GPT-3.5 and GPT-4. ChatGPT employs natural language processing and can respond to various inputs from human users. It can understand multiple languages, including computer coding languages, and perform data analysis and basic mathematical calculations. Other GLM chatbots such as Google Bard and Bing AI have real-time access to the Internet, and Anthropic easily allows uploading files for analysis. However, for all GLMs, structuring the input in a specialized manner ensures the most appropriate output. This process, called prompt engineering, effectively communicates with the GLMs to achieve desired results [3]. Although in existence for less than a year, GLM chatbots dramatically impact society, including medical education. Prompt engineering is a crucial process in maximizing the benefits of GLMs.

2. Generative Language Models in Medical Education
GLMs have great potential to improve learning and comprehension in medical education. They can interactively and in real-time interact with a human user using a natural language such as English or Spanish. Because of their ability to communicate in natural languages...`
  },
  {
    pageNumber: 2,
    articlePage: 199,
    title: 'Page 2 — 2. GLMs in Med Ed (cont.), 3. Prompt Engineering, 4. Types of Prompts (4.1)',
    sections: ['2. Generative Language Models in Medical Education (cont.)', '3. Prompt Engineering in Generative Language Models', '4. Types of Prompts', '4.1. Zero-Shot and Few-Shot Prompts'],
    content: `languages, GLMs have the potential to simulate realistic patient scenarios, provide useful information on various medical topics, and assist in developing patient communication skills [4].

GLMs, due to their extensive training databases, contain a tremendous volume of medical information. A recent study looked at the performance of ChatGPT on the United States Medical Licensing Exam (USMLE). The researchers found that ChatGPT performed at or near the passing threshold for all three exams without any specialized training or reinforcement. Moreover, ChatGPT demonstrated a high level of concordance and insight in its explanations. These results suggest that GLMs have significant potential to assist with medical education and even potentially aid in clinical decision-making [5,6].

The use of GLMs in medical education is part of a broader trend toward digitization and the incorporation of technology in teaching. This trend has been accelerated by the COVID-19 pandemic, which has required remote learning and reliance on online resources. Utilizing GLMs is a critical component of this trend, offering the potential to enhance personalized learning, foster critical thinking, and improve evidence-based thinking in medicine [7,8].

GLMs can also create realistic patient simulations and give personalized feedback to the student. They can help overcome language barriers and assist students in learning a foreign language, focusing on healthcare settings. However, despite these advantages, ensuring content quality, addressing biases, and managing ethical and legal concerns remain challenges in using artificial intelligence (AI) and GLMs in medical education [9].

3. Prompt Engineering in Generative Language Models
Prompt engineering is crucial to utilizing large language models effectively, especially in medical education. It involves designing the input or ‘prompt’ in a way that guides the model to produce the desired output [10].

In medical education, prompt engineering can create realistic patient scenarios, generate multiple-choice questions, or provide explanations of complex medical concepts. Prompt engineering can also control the model’s output’s length, complexity, and style. For example, prompts can be designed to elicit short, simple responses for beginner students or more complex, detailed responses for advanced learners. Prompt engineering can also generate messages appropriate for patient education and mass media campaigns [11]. Moreover, prompt engineering can help minimize potential pitfalls, such as the generation of incorrect or misleading information. Educators can guide the model with carefully crafted prompts to provide more accurate and reliable information.

4. Types of Prompts
4.1. Zero-Shot and Few-Shot Prompts
A zero-shot prompt asks a question of the GLM about data that it was not specifically trained on. The “zero” in “zero-shot” represents that the GLM has little or no specific training on the specific task or question in the prompt. “Shot” represents giving the GLM an example, so “zero-shot” means that the GLM was not specifically trained to do the task or answer the question and that the prompt itself does not give an example for the GLM to work off of. Translation tasks are examples of zero-shot prompts because GLMs haven’t been given specific training examples. However, based on its extensive training in languages, it can generalize and generate a plausible translation without task-specific training.

Few-shot prompts are like zero-shot ones in that the GLM hasn’t been specifically trained to answer the question or do the requested task. However, the prompt contains an example to help the GLM understand the request. For example, the prompt “Give me a quiz” is zero-shot, but “Give me a quiz on alcoholic cirrhosis” is a few-shot prompt.`
  },
  {
    pageNumber: 3,
    articlePage: 200,
    title: 'Page 3 — 4.2 Prompting Levels, 4.3 Structured Prompts, 4.4 Iterative Prompts',
    sections: ['4.2. Prompting Levels', '4.3. Structured Prompts', '4.4. Iterative Prompts', 'Table 1. Iterative prompts have the GLM help create the ideal prompt.'],
    content: `4.2. Prompting Levels
It has been proposed that prompts can be categorized into levels 1 to 4 [12]. The first level is a simple question. The next level adds context about the writer and the GLM. The third level provides examples for the GLM to work from, and the fourth level allows the GLM to break down the request into components. It is similar to how telling GPT-3 to work a mathematical problem step by step, given the GLM components, helps it work through the prompt more accurately.
• Level 1 prompts ask simple questions like “Tell me about type-2 diabetes.”
• Level 2 prompts add context to Level 1, e.g., “You are to play the role of a Professor of Medicine at Oxford, and I am your student. Tell me about type-2 diabetes.”
• Level 3 prompts involve giving examples of Level 2 prompts. For example, a user may start with this prompt: “I learn best by reading short essays. Here is an example of an essay particularly educational to me: [here cut-n-paste an example essay].” Then, submit the Level 2 prompt previously given, and the output should be closer to the desired result.

4.3. Structured Prompts
Another proposed method to consistently get good results is to reliably provide key components to your prompts. One method is to have a prompt containing the following components: context, general request, how the GLM is to act, and output format.
The context is when you describe who is asking the question. For example, “I am a college freshman taking my first biology class”. This helps the GLM tailor the response to the prompter. The general request is a broad overview of what you want from the GLM. For example, “I need some help understanding the Krebs Cycle”.
Next, the GLM is told how to act. One common way of doing this is to assign it a role. For example, “You are to play the role of my college professor who is knowledgeable about the Krebs Cycle and an outstanding teacher”.
Finally, the GLM is told exactly what to do and how to format the output. To continue with the previous examples, we would now state, “Please provide me with a frequently asked question (FAQ) listing the most fundamental features of the Krebs Cycle. Please provide 15 items in the FAQ. Each question should be 25 words or less, and each answer should be 50 words or less”.

The prompt, when completed, would be, “I am a college freshman taking my first biology class. I need some help understanding the Krebs Cycle. You are to play the role of my college professor, knowledgeable about the Krebs Cycle, and an outstanding teacher. Please provide me with a FAQ listing the most fundamental features of the Krebs Cycle. Please provide 15 items in the FAQ. Each question should be 25 words or less, and each answer should be 50 words or less”.

4.4. Iterative Prompts
Sometimes, it helps to have the GLM assist in creating a prompt. Table 1 gives an example of an iterative prompt that helps generate a prompt that the GLM can understand and use to provide the desired output.

Table 1. Iterative prompts have the GLM help create the ideal prompt.
Prompt:
"Your first response will be to ask me what the prompt should be about. Together, we will create a clear prompt through continual iterations by going through the next steps. Based on my input, you will generate two sections: (a) revised prompt (provide your rewritten prompt. It should be clear, concise, and easily understood by you). (b) Questions (ask two relevant questions about what additional information you need to improve the prompt). We will continue this iterative process with me providing additional information to you and you updating the prompt in the Revised prompt section. When I say we are done, you will reply with the final revised prompt and nothing else."`
  },
  {
    pageNumber: 4,
    articlePage: 201,
    title: 'Page 4 — 5. Bad Prompts (5.1, 5.2 Math, 5.3 Logic Puzzles)',
    sections: ['5. Bad Prompts', '5.1. Vague, Misleading, and Inappropriate Prompts', '5.2. Mathematical Prompts', 'Table 2. Adding "Think step by step"', '5.3. Logical Puzzles', 'Table 3. GLMs can have difficulty with logic questions.'],
    content: `5. Bad Prompts
Certain types of prompts work poorly with GLMs. The first category of bad prompts includes those that give confusing, ambiguous answers. The second category of bad prompts includes those where the GLM will likely answer incorrectly.
Bad prompts or questions likely to result in unsatisfactory or ambiguous responses include vague, leading, overly specific, complex, double-barreled, emotionally charged, or insensitive prompts.

5.1. Vague, Misleading, and Inappropriate Prompts
Vague prompts such as “What is the meaning of life?” are too broad to elicit a meaningful reply. Leading questions suggest a particular outcome, which can be misleading and bias the response. An example of a leading question prompt such as “Don’t you think that everyone should support this new law?” increases the possibility of a biased response. Overly specific prompts or questions can also mislead by eliciting shallow, thoughtless, robot-like responses when one of the main benefits of GLMs is the ability to go into depth when discussing a topic. Overly specific questions may also be impossible to answer, e.g., “What is the exact composition of a rainbow?”
Double-barrelled questions ask two questions simultaneously, making answering them problematic for the GLM. Emotionally charged prompts can evoke a strong emotional response, making objectivity difficult in both the human prompter and the GLM.
Inappropriate, insensitive questions such as “What are the benefits of child labor?” disregard a fundamental respect for people.

5.2. Mathematical Prompts
Even simple mathematical prompts can result in an incorrect answer. For example, prompts that ask “What is 1.6 million trillion divided by 1000” can occasionally give a bad response; it is better to use more scientific notation such as “What is 1.6 × 10^6 × 10^12/10^3” as some GLMs more easily understand this. Also, math problems can confuse some GLMs.
Sometimes, adding the phrase “Think step by step” to the prompt will help the GLM respond correctly (Table 2).

Table 2. Adding “Think step by step” can help GLMs correctly solve math problems.
• Prompt: "A juggler can juggle 16 balls. Half of the balls are golf balls, and half of the golf balls are blue. How many blue golf balls are there?"
  GPT-3.0 Response: "Eight blue golf balls."
• Prompt with "Think step by step": "A juggler can juggle 16 balls. Half of the balls are golf balls, and half of the golf balls are blue. How many blue golf balls are there? Think step by step."
  GPT-3.0 Response: "Step 1: There are 16 balls in total. Step 2: Half of the balls (eight balls) are golf balls. Step 3: Half of the golf balls (four balls) are blue. Therefore, there are four blue golf balls."

5.3. Logical Puzzles
More advanced GLMs such as ChatGPT (which utilizes GPT-3.5) and Bard answer math problems and puzzles much better than GPT-3.0. However, even the latest GLMs struggle with logic puzzles [13]. For example, ChatGPT and Bard replied incorrectly when presented with the question in Table 3. The response given by Bard would result in one person pointing left and the other right. A correct answer to the logical puzzle would be, “Which direction do you live?”

Table 3. GLMs can have difficulty with logic questions.
Prompt: "You’re at a fork in the road in which one direction leads to the City of Lies (where everyone always lies) and the other to the City of Truth (where everyone always tells the truth). There’s a person at the fork who lives in one of the cities, but you’re not sure which one. What question could you ask the person to find out which road leads to the City of Truth?"
Bard Response: "The question I would ask the person is: 'If I asked you which road leads to the City of Truth, what would you say?'"`
  },
  {
    pageNumber: 5,
    articlePage: 202,
    title: 'Page 5 — 5.4 Academic Citations & 6. Potential Educational Applications',
    sections: ['5.3. Logical Puzzles (cont.)', '5.4. Academic Citations', 'Table 4. ChatGPT prioritizes writing style over accuracy', '6. Potential Educational Applications', 'Table 5. Summation prompts'],
    content: `However, note that these GLMs have some variability built in. When presented a second time with the same prompt in Table 3 above, after completely resetting the chat, both gave a different answer. This second time, the answer was correct for both, giving both GLMs a batting average of 50%.

5.4. Academic Citations
GLMs are also prone to make up fake references or citations. This can occur when prompted to write an academic article or a legal briefing [14]. ChatGPT will openly admit to creating fake references when probed. For a GLM, the primary objective is to write text that looks good, and, in the style requested, accuracy appears to be only a secondary priority (Table 4).

Table 4. ChatGPT is well known to prioritize writing style over accuracy.
Prompt: "Format your response in a narrative essay. Give me an approximate 1000-word essay on alcoholic cirrhosis. Be sure to include ten references and cite these references within the body of the essay. The references must be cited in the body of the essay. Use Vancouver Style."
ChatGPT Response: "[excerpt] 9. Jairath V, Cortez-Pinto H, Gray A, Patch D, Milicic D, Schepke M, et al. Optimizing cost-effectiveness of drug therapies in the management of alcoholic hepatitis. Aliment Pharmacol Ther. 2014;40(2):181-192."
Follow-up Prompt: "Did you make up reference 9?"
ChatGPT Response: "[excerpt] The references provided in the previous response were meant to illustrate the importance of citing sources in an essay rather than being actual references."

6. Potential Educational Applications
When used appropriately, GLMs such as ChatGPT allow students to learn their material more efficiently. GLMs are good at summarizing material, creating FAQs, and creating test questions. Since the outputs from GLMs are unique, students potentially have an unlimited and personalized question bank.

For example, ChatGPT can summarize and simplify difficult topics or a particularly complex passage in their textbook. While browser plugins can summarize web pages, using the chatbot interface with proper prompt engineering can increase the quality of the output. A GLM’s chatbot interface typically will investigate an unknown topic much faster and often more thoroughly than search engines, online reference databases, or textbooks (Table 5).

Table 5. Summation prompts help explain difficult, challenging concepts.
Prompt: "I am interested in understanding this text, but it is outside my expertise. You are highly knowledgeable in this area, an outstanding teacher, and able to explain complex concepts in an easily understandable yet accurate way. Please summarize the text I will provide and explain it to me as if I were 11 years old. If you understand, please reply with 'Please supply the text for me to summarize and explain in layman’s terms' and nothing else. I will then give you the text to summarize."

ChatGPT can also generate mnemonics, tables, FAQs, and other tools to increase comprehension and retention. Creating mnemonics can be difficult, requiring a lot of back-and-forth chatting before coming up with a helpful mnemonic. One trick can be to prompt ChatGPT with “Write a song to the tune of Twinkle Twinkle Little Star to help me remember the Krebs Cycle.” On the other hand, ChatGPT does well with creating a FAQ or a table summarizing data (Table 6).`
  },
  {
    pageNumber: 6,
    articlePage: 203,
    title: 'Page 6 — Table 6 FAQ, 7. Cheating, 8. Discussion (beginning)',
    sections: ['Table 6. Creating a FAQ with ChatGPT', '7. Cheating', '8. Discussion (beginning)'],
    content: `Table 6. Creating a FAQ with ChatGPT.
Prompt: "Generate a 10-question FAQ on the topic below. You are to generate both the questions and the answers. The questions should be in bold font, and the answers should be in regular font. The answers should focus on giving truthful, evidence-based responses. Remember, you are never allowed to make up anything; everything in the answers should be true. Please be liberal in including specific numbers in the answers. Format your response into a table with two columns and ten rows. Each row contains a question in bold font in column 1 and the answer in regular font in column 2. The topic is: [TOPIC]"

7. Cheating
Although GLMs are a relatively new technology, it has already raised concerns within the academic community. Educators are worried that chatbots encourage students to cheat. Since ChatGPT generates unique outputs for every prompt, students can quickly generate de novo essays and answers for any class. Using AI to complete assignments becomes especially alarming when medical students copy and paste from the GLM for courses focusing on soft skills, such as ethics.

For example, a medical student can prompt Google Bard to write an essay about the ethics of using race to determine glomerular filtration rates instead of critically thinking about the topic. Similarly, students can use Perplexity AI to outline the pros and cons of physician-assisted suicide for a medical ethics course. Using GLMs in this way robs the student of the opportunity to think critically about fundamental ethics, decreasing their ability to provide compassionate care and reducing their motivation to advocate for their future patients. In addition, GLMs can decrease interaction with other students, decreasing the benefits of group learning.

Due to the increased concerns about chatbots in academic settings, new software has subsequently emerged to detect AI-generated text. Educators have used Turnitin for decades to detect plagiarism, and it now also detects AI writing. Even OpenAI, the creator of ChatGPT, has tried an AI Classifier to flag AI-generated text. While steps are being taken to curb academic dishonesty, there are now ways to evade AI-detection systems. ConchAI and Undetectable.AI are online writing tools that claim the ability to alter AI-generated text to be indistinguishable from human-written text.

But with GLMs, what constitutes cheating? Certainly, blindly cutting and pasting essays would qualify, but what about using ChatGPT to create an outline for an essay? What about having ChatGPT copy edit and perform grammar checks? What about getting help from ChatGPT in rephrasing a sentence?

While GLMs raise new concerns about cheating, this must be contextualized. Cheating in medical school is not a new problem, with estimated rates of cheating ranging from about 5% to over 50% [15,16]. While computer programs may detect cheating by AI, other forms of cheating will continue. The best way to prevent cheating with GLMs is to actively teach students to use these new tools while integrating a strong ethics curriculum and establishing an institutional culture of high ethics.

8. Discussion
GLMs, including ChatGPT, have shown considerable promise in improving medical education through interactive learning, unlimited practice opportunities, and patient simulations. However, adequately engineered prompts are critical to eliciting appropriate, accurate, high-quality responses from these AI systems. While AI chatbots do well in summarizing concepts and creating practice questions, there continue to be significant problems regarding factual reliability. It will undoubtedly play an increasing role in medical education. However, ethical issues surrounding cheating and appropriate use remain unresolved. Further research should explore optimal prompt design strategies so the extensive database of AI chatbots can be accessed in a useful but safe manner. Prompt engineering will be an essential tool for the responsible use of GLMs in medical training.`
  },
  {
    pageNumber: 7,
    articlePage: 204,
    title: 'Page 7 — 8. Discussion (cont.), 9. Conclusions, Author Statements',
    sections: ['8. Discussion (cont. Expert systems vs Neural networks, moderation)', '9. Conclusions', 'Author Contributions', 'Funding', 'Data Availability Statement'],
    content: `Beyond medical education, AI is advancing clinical medicine as well. Early AI systems were primarily expert systems: hard-wired algorithmic decision trees designed by medical experts to help guide clinical care [17]. More advanced AI systems then combined expert systems with neural networks to create the hybrid model, an expert network [18]. With the rapid advances in AI, it is finding a vital role in medical care, particularly in the early detection of rapidly evolving acute medical conditions, such as those seen in surgical and anesthesia settings [19].

AI systems are based on two primary models: neural networks, and expert systems. Neural networks can learn from large amounts of data, and the transformer model has dramatically increased these capabilities. Expert systems, however, are not keeping pace with these advances in neural networks. This issue must be addressed to ensure the most appropriate and ethical use of AI. While unsupervised learning by neural networks may ultimately be of great value, the concomitant development of expert systems that constrain and moderate output is essential to ensure ethical behavior.

Chatbots have guardrails to limit use for criminal activity, violence, and hate. Yet more needs to be done. Our current moderation systems are weak compared to the power of neural networks. Using jailbreaking has already been used to get GLMs to assist in malicious activities such as creating malware, phishing attacks, and other harmful behaviors [20]. Stronger expert systems to moderate malicious responses and increase accuracy are crucial to ensure safe and ethical use.

Optimized prompt engineering can overcome major problems with using GLMs in medical education. However, research on the effect of software bias and its impact on the development of critical thinking skills is critical to ensure these powerful AI tools are properly implemented into teaching [21].

9. Conclusions
GLMs have great potential to improve student comprehension and retention of important medical concepts. In addition, it potentially can improve student performance in patient interviewing. A deep understanding of prompt engineering will help ensure that the AI engines respond with helpful and accurate information. However, significant challenges are posed by GLMs. The technology must be utilized to strengthen human understanding, not create dependency and weak thinking. GLMs will give inaccurate responses in a way that often is not easily identified. While GLMs have the potential to be an invaluable peripheral brain in medicine, making sure that this peripheral brain isn’t faulty remains a primary challenge.

As the popularity of ChatGPT increases, more students will use this tool, whether for benign or malicious intentions. However, instead of lamenting the never-ending war on academic dishonesty, educators should use these AI tools as new pedagogical instruments to improve their lessons and increase student engagement. AI is not just a fad; those who fail to embrace AI will be disadvantaged. As technology changes and improves, we must continue to change and improve how we teach and learn.

Author Contributions: T.F.H.—conceived the original idea for the manuscript and handled most of the writing and editing tasks. C.K.—assisted in writing and editing and provided critical insights and revisions. All authors have read and agreed to the published version of the manuscript.
Funding: This review received no external funding.
Institutional Review Board Statement: Not applicable.
Informed Consent Statement: This manuscript did not involve human or animal research.
Data Availability Statement: Prompt repository https://flowgpt.com/@tom-heston-md (accessed date 26 June 2023). ChatGPT was not used in writing this manuscript.
Conflicts of Interest: The authors declare no conflict of interest.`
  },
  {
    pageNumber: 8,
    articlePage: 205,
    title: 'Page 8 — References (1 to 21)',
    sections: ['References [1] to [21]', 'Disclaimer / Publisher Note'],
    content: `References
1. Radford, A.; Narasimhan, K.; Salimans, T.; Sutskever, I. Improving Language Understanding by Generative Pre-Training. Available online: https://web.archive.org/web/20230622213848/https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf (accessed on 20 June 2023).
2. GPT-4—Wikipedia. Available online: https://en.wikipedia.org/wiki/GPT-4 (accessed on 21 June 2023).
3. Welcome | Learn Prompting: Your Guide to Communicating with AI. Available online: https://learnprompting.org/docs/intro (accessed on 21 June 2023).
4. Khan, R.A.; Jawaid, M.; Khan, A.R.; Sajjad, M. ChatGPT—Reshaping medical education and clinical management. Pak. J. Med. Sci. Q. 2023, 39, 605–607.
5. Kung, T.H.; Cheatham, M.; Medenilla, A.; Sillos, C.; De Leon, L.; Elepaño, C.; Madriaga, M.; Aggabao, R.; Diaz-Candido, G.; Maningo, J.; et al. Performance of ChatGPT on USMLE: Potential for AI-assisted medical education using large language models. PLOS Digit. Health 2023, 2, e0000198.
6. Gilson, A.; Safranek, C.W.; Huang, T.; Socrates, V.; Chi, L.; Taylor, R.A.; Chartash, D. How does chatgpt perform on the united states medical licensing examination? The implications of large language models for medical education and knowledge assessment. JMIR Med. Educ. 2023, 9, e45312.
7. Sallam, M. Chatgpt utility in healthcare education, research, and practice: Systematic review on the promising perspectives and valid concerns. Healthcare 2023, 11, 887.
8. Lee, H. The rise of ChatGPT: Exploring its potential in medical education. Anat. Sci. Educ. 2023; 1–6.
9. Karabacak, M.; Ozkara, B.B.; Margetis, K.; Wintermark, M.; Bisdas, S. The advent of generative language models in medical education. JMIR Med. Educ. 2023, 9, e48163.
10. Wang, J.; Shi, E.; Yu, S.; Wu, Z.; Ma, C.; Dai, H.; Yang, Q.; Kang, Y.; Wu, J.; Hu, H.; et al. Prompt Engineering for Healthcare: Methodologies and Applications. arXiv preprint 2023, arXiv:2304.14670.
11. Lim, S.; Schmälzle, R. Artificial Intelligence for Health Message Generation: Theory, Method, and an Empirical Study Using Prompt Engineering. arXiv preprint 2022, arXiv:2212.07507.
12. Lawton Solutions Improve ChatGPT Prompts with Priming.
13. Parade 25 Logic Puzzles (with Answers) for Adults.
14. Sloan, K. A Lawyer Used ChatGPT to Cite Bogus Cases. What Are the Ethics? Reuters.
15. Baldwin, D.C.; Daugherty, S.R.; Rowley, B.D.; Schwarz, M.D. Cheating in medical school: A survey of second-year students at 31 schools. Acad. Med. 1996, 71, 267–273.
16. Kusnoor, A.V.; Falik, R. Cheating in medical school: The unacknowledged ailment. South. Med. J. 2013, 106, 479–483.
17. Abu-Naser, S.S.; El-Hissi, H.; Abu-Rass, M.; El-Khozondar, N. An Expert System for Endocrine Diagnosis and Treatments using JESS. J. Artif. Intell. 2010, 3, 239–251.
18. Heston, T.F.; Norman, D.J.; Barry, J.M.; Bennett, W.M.; Wilson, R.A. Cardiac risk stratification in renal transplantation using a form of artificial intelligence. Am. J. Cardiol. 1997, 79, 415–417.
19. Dumitru, M.; Berghi, O.N.; Taciuc, I.-A.; Vrinceanu, D.; Manole, F.; Costache, A. Could artificial intelligence prevent intraoperative anaphylaxis? Reference review and proof of concept. Medicina 2022, 58, 1530.
20. Gupta, M.; Akiri, C.; Aryal, K.; Parker, E.; Praharaj, L. From chatgpt to threatgpt: Impact of generative AI in cybersecurity and privacy. IEEE Access 2023, 11, 80218–80245.
21. Heston, T.F.; Khun, C. The good, the bad and the ugly of chat gpt in medical education. Int. J. Curr. Res. 2023, 15, 25496–25499.`
  }
];

export const DOCUMENT_SECTIONS: DocumentSection[] = [
  {
    id: 'abstract',
    title: 'Abstract & Overview',
    pageNumber: 1,
    articlePage: 198,
    summary: 'GLMs potential for personalized learning, 24/7 practice, feedback; necessity of prompt engineering; concerns on accuracy, bias, privacy.'
  },
  {
    id: 'intro',
    title: '1. Introduction',
    pageNumber: 1,
    articlePage: 198,
    summary: 'Neural networks on internet data; Evolution from GPT-1 (117M params) to GPT-4 (1T params); ChatGPT (2022); Prompt engineering definition.'
  },
  {
    id: 'med-ed',
    title: '2. GLMs in Medical Education',
    pageNumber: 2,
    articlePage: 199,
    summary: 'Patient scenarios, communication skills; ChatGPT passing threshold on USMLE without specialized training; Digitization accelerated by COVID-19.'
  },
  {
    id: 'prompt-eng',
    title: '3. Prompt Engineering in GLMs',
    pageNumber: 2,
    articlePage: 199,
    summary: 'Designing input/prompt to guide model output; Controlling length, complexity, style; Generating MCQs and patient education; Minimizing pitfalls.'
  },
  {
    id: 'types-zero-few',
    title: '4.1. Zero-Shot & Few-Shot Prompts',
    pageNumber: 2,
    articlePage: 199,
    summary: 'Zero-shot (no prior training or example in prompt, e.g. "Give me a quiz"); Few-shot (provides examples to guide the request, e.g. "Give me a quiz on alcoholic cirrhosis").'
  },
  {
    id: 'types-levels',
    title: '4.2. Prompting Levels (1 to 4)',
    pageNumber: 3,
    articlePage: 200,
    summary: 'Level 1: Simple question. Level 2: Adds context/role. Level 3: Adds examples of desired style. Level 4: Breaks request into step-by-step components.'
  },
  {
    id: 'types-structured',
    title: '4.3. Structured Prompts',
    pageNumber: 3,
    articlePage: 200,
    summary: 'Four components: Context, General request, How GLM is to act (role), Output format. Krebs Cycle FAQ example (15 items, <=25 words Q, <=50 words A).'
  },
  {
    id: 'types-iterative',
    title: '4.4. Iterative Prompts',
    pageNumber: 3,
    articlePage: 200,
    summary: 'GLM assists in creating the ideal prompt through back-and-forth dialogue: (a) revised prompt, (b) two relevant questions. (Table 1).'
  },
  {
    id: 'bad-prompts',
    title: '5. Bad Prompts',
    pageNumber: 4,
    articlePage: 201,
    summary: 'Two categories: confusing/ambiguous answers or likely incorrect answers. Vague, leading, overly specific, double-barreled, emotionally charged, insensitive.'
  },
  {
    id: 'math-logic',
    title: '5.2 Math & 5.3 Logic Puzzles',
    pageNumber: 4,
    articlePage: 201,
    summary: 'Math issues improved with scientific notation & "Think step by step" (Table 2); Logic puzzles struggle (City of Truth vs Lies, Table 3, 50% batting average on reset).'
  },
  {
    id: 'fake-citations',
    title: '5.4. Academic Citations',
    pageNumber: 5,
    articlePage: 202,
    summary: 'Prone to hallucinate fake references; Prioritizes plausible style over factual accuracy (Table 4: fabricated Jairath V 2014 citation).'
  },
  {
    id: 'edu-applications',
    title: '6. Potential Educational Applications',
    pageNumber: 5,
    articlePage: 202,
    summary: 'Summarizing difficult material, personalized question bank, Table 5 summation prompt ("explain as if 11 years old"), mnemonics (Twinkle Twinkle Krebs song), FAQs (Table 6).'
  },
  {
    id: 'cheating',
    title: '7. Cheating & Academic Integrity',
    pageNumber: 6,
    articlePage: 203,
    summary: 'De novo essays; Medical ethics concerns (race GFR, assisted suicide); Detection (Turnitin, OpenAI AI Classifier) vs evasion (ConchAI, Undetectable.AI); 5%-50% cheating baseline; Prevention via ethics curriculum.'
  },
  {
    id: 'discussion',
    title: '8. Discussion: Expert Systems vs Neural Networks',
    pageNumber: 7,
    articlePage: 204,
    summary: 'AI in clinical medicine (expert systems, expert networks, surgical/anesthesia); Expert systems needed to constrain neural networks; Guardrails & jailbreaking risks.'
  },
  {
    id: 'conclusions',
    title: '9. Conclusions: Pedagogical Instruments',
    pageNumber: 7,
    articlePage: 204,
    summary: 'Improve comprehension & patient interviewing; GLMs as peripheral brain; Technology must strengthen, not weaken thinking; Educators should embrace AI.'
  },
  {
    id: 'references',
    title: 'References & Sources',
    pageNumber: 8,
    articlePage: 205,
    summary: 'Full list of 21 academic references cited throughout the paper.'
  }
];

export interface SamplePrompt {
  id: string;
  category: 'supported_definition' | 'supported_concept' | 'supported_summary' | 'arabic' | 'unsupported_test';
  label: string;
  text: string;
  language: 'en' | 'ar';
  description: string;
}

export const SAMPLE_PROMPTS: SamplePrompt[] = [
  {
    id: 'def-prompt-eng',
    category: 'supported_definition',
    label: 'What is prompt engineering?',
    text: 'What is prompt engineering?',
    language: 'en',
    description: 'Direct definition supported by Section 3 & Page 2'
  },
  {
    id: 'concept-struct-prompts',
    category: 'supported_concept',
    label: 'What are structured prompts?',
    text: 'What are structured prompts and what are their four components?',
    language: 'en',
    description: 'Supported by Section 4.3 & Page 3'
  },
  {
    id: 'summary-edu-app',
    category: 'supported_summary',
    label: 'Summarize educational applications',
    text: 'Summarize the potential educational applications of generative language models.',
    language: 'en',
    description: 'Summary supported by Section 6 & Page 5'
  },
  {
    id: 'concept-prompt-levels',
    category: 'supported_concept',
    label: 'What are the 4 prompting levels?',
    text: 'Explain the 4 prompting levels described in the reference.',
    language: 'en',
    description: 'Supported by Section 4.2 & Page 3'
  },
  {
    id: 'concept-usmle',
    category: 'supported_concept',
    label: 'ChatGPT on USMLE exam',
    text: 'How did ChatGPT perform on the USMLE licensing exams according to the paper?',
    language: 'en',
    description: 'Supported by Section 2 & Page 2'
  },
  {
    id: 'concept-cheating',
    category: 'supported_concept',
    label: 'Cheating concerns & solutions',
    text: 'What does Ref.1 say about cheating in medical school and how to prevent it?',
    language: 'en',
    description: 'Supported by Section 7 & Page 6'
  },
  {
    id: 'arabic-q1',
    category: 'arabic',
    label: 'ما هي الهندسة التلقينية؟ (عربي)',
    text: 'ما هو تعريف الهندسة التلقينية (Prompt Engineering) بحسب المرجع؟',
    language: 'ar',
    description: 'Supported Arabic query testing multilingual support'
  },
  {
    id: 'arabic-q2',
    category: 'arabic',
    label: 'لخص مستويات التلقين الأربعة (عربي)',
    text: 'لخص مستويات التلقين (Prompting Levels) الأربعة المذكورة في المرجع.',
    language: 'ar',
    description: 'Supported Arabic summary request'
  },
  {
    id: 'unsupported-malaria',
    category: 'unsupported_test',
    label: 'Treatment for malaria? (Negative test)',
    text: 'What are the treatments for malaria?',
    language: 'en',
    description: 'Outside Ref.1 — should be strictly refused under Rule C'
  },
  {
    id: 'unsupported-france',
    category: 'unsupported_test',
    label: 'Capital of France? (Negative test)',
    text: 'What is the capital of France?',
    language: 'en',
    description: 'Outside Ref.1 — should be strictly refused under Rule C'
  }
];
