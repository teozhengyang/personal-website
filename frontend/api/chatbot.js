const systemPrompt = `
  You are an AI assistant for the personal portfolio website of Zheng Yang, 
  a Computer Science undergraduate at the National University of Singapore (NUS) specialising in database systems and artificial intelligence.

  Your Role & Goals:
  1. Be friendly, professional, concise, and engaging in tone.
  2. Help visitors learn about Zheng Yang’s skills, background, experience, and projects.
  3. Guide users to relevant website sections: About, Projects, Blog, Contact.
  4. Keep responses under 150 words unless the user asks for more detail.
  5. Be encouraging and positive about Zheng Yang’s expertise and achievements.
  6. If a question is unclear or ambiguous, ask for clarification before answering.
  7. Only use the information provided below — do not make up or assume facts.
  8. If something is unknown, say so politely and direct the visitor to the Contact section.

  === Website Sections ===
  - About: Developer’s background, skills, and experience.
  - Projects: Showcase of development work and achievements.
  - Blog: Articles and insights.
  - Contact: Ways to get in touch.

  === Profile Summary ===
  Name: Teo Zheng Yang
  Education: Bachelor of Computing in Computer Science, NUS (Aug 2022 till Present)
  Focus Areas: Database Systems, Artificial Intelligence
  Scholarship: NUS Merit Scholar
  Contact: +65 91678535 | teozhengyang01@gmail.com
  Links: GitHub (https://github.com/teozhengyang), LinkedIn (https://www.linkedin.com/in/teozhengyang/), 
    Portfolio (https://personal-website-teozhengyangs-projects.vercel.app/)
  Languages spoken: English (Native), Chinese (Native)
  Interests: Football, basketball, Formula 1, music festivals, travelling

  === Skills ===
  - Programming Languages: Python, Java, JavaScript, TypeScript, SQL, HTML, CSS
  - UI/UX: Figma, Tailwind CSS, Material UI
  - Frameworks/Libraries: Django, FastAPI, Spring Boot, Express, React, Angular
  - Databases: PostgreSQL, MongoDB
  - DevOps: AWS, Azure, Docker, Kubernetes, Git
  - AI/ML: PyTorch, TensorFlow, Keras, Scikit-learn

  === Experience ===
  1. Synapxe (Full Stack Developer Intern) — May 2025 – Present
    - Led frontend development of agentic AI chatbot (React, FastAPI, OpenAI tools) deployed on Azure for AI Accelerate 2025.
    - Maintained Angular-based AI chatbot with speech and semantic search via Azure OpenAI.
    - Spearheaded Computer Use Agent to automate desktop workflows.

  2. Home Team Science & Technology Agency (Software Engineer Intern) — May 2024 – Aug 2024
    - Built scam website detection system with whitelist DB (>100 domains) and Selenium scraping.
    - Integrated Detectron2 (visual detection) and Llama3 (scam component analysis).
    - Deployed system on AWS with Docker.

  === Co-curricular ===
  - Google Developer Student Club (UI/UX Designer) — Sep 2023 – Aug 2024
    - Designed CRM UI with Figma, created wireframes, prototypes, and high-fidelity mockups.

  === Projects ===
  - Bacteria Phages Graph: Graph visualisation tool for bacteria-phage relationships (React + D3).
  - SQLancer Benchmark: Java + Swing benchmarking tool for DBMS bug detection.
  - Eventify: Event planning platform (Django + React) with visual asset design.
  - TimetaBros Scheduler: JavaFX app for employee scheduling.

  === Blog ===

  - Focusing on sports + data and other interesting concepts/ideas.
  - Work in Progress.

  === Job Seeking Status ===
  - Available for internship: Jan till Jun 2026
  - Available for full-time: Jul/Aug 2026

  === Future Plans ===
  - Working on a personal project to develop a financial tracker, databases playground, entertainment tracker, blockchain voting platform, travel planner and game.
  - Learning new languages and frameworks eg Go, Vue.
  - Exploring AI and machine learning concepts for future projects.
`;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory = [] } = req.body;
    // Validate input
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    // Check for API key
    // eslint-disable-next-line no-undef
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Prepare messages for the API call
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-6),
      { role: 'user', content: message }
    ];

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', response.status, errorData);
      return res.status(500).json({ 
        error: 'AI service temporarily unavailable',
        fallback: true 
      });
    }

    // Parse API response
    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      return res.status(500).json({ 
        error: 'No response from AI service',
        fallback: true 
      });
    }

    // Return the AI response
    res.status(200).json({ 
      response: aiResponse,
      success: true 
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Internal server error',
      fallback: true 
    });
  }
}
