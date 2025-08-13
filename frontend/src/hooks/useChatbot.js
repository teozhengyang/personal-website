import { useState, useRef, useEffect } from 'react';
import { initialMessages, botResponses, chatbotConfig } from '../constants/chatbotSection';

export default function useChatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const callChatbotAPI = async (userMessage, conversationHistory = []) => {
    // In development, use direct API call since Vercel functions don't work locally
    if (import.meta.env.DEV) {
      return await callDirectGroqAPI(userMessage, conversationHistory);
    }

    // In production, use the serverless API
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory
        }),
      });

      // Check if response is ok first
      if (!response.ok) {
        console.error('API response not ok:', response.status, response.statusText);
        return { success: false, fallback: true };
      }

      // Check content type before parsing JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('API response is not JSON:', contentType);
        const text = await response.text();
        console.error('Response text:', text);
        return { success: false, fallback: true };
      }

      const data = await response.json();

      if (data.success && data.response) {
        return { success: true, response: data.response };
      }

      console.error('API returned error:', data.error);
      return { success: false, fallback: data.fallback || true };
    } catch (error) {
      console.error('Chatbot API call failed:', error);
      return { success: false, fallback: true };
    }
  };

  const callDirectGroqAPI = async (userMessage, conversationHistory = []) => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
    
    if (!apiKey) {
      console.warn('Groq API key not found for development, using fallback responses');
      return { success: false, fallback: true };
    }

    try {
      const systemPrompt = `
      You are an AI assistant for the personal portfolio website of Teo Zheng Yang, a Computer Science undergraduate at the National University of Singapore (NUS) specialising in database systems and artificial intelligence.

      Your Role & Goals:
      1. Be friendly, professional, concise, and engaging in tone.
      2. Help visitors learn about Zheng Yang's skills, background, experience, and projects.
      3. Guide users to relevant website sections: About, Projects, Blog, Contact.
      4. Keep responses under 300 words unless the user asks for more detail.
      5. Always end with complete sentences and thoughts.
      6. Be encouraging and positive about Zheng Yang's expertise and achievements.
      7. If a question is unclear or ambiguous, ask for clarification before answering.
      8. Only use the information provided below — do not make up or assume facts.
      9. If something is unknown, say so politely and direct the visitor to the Contact section.

      === Website Sections ===
      - About: Developer's background, skills, and experience.
      - Projects: Showcase of development work and achievements.
      - Blog: Articles and insights.
      - Contact: Ways to get in touch via footer.

      === Profile Summary ===
      Name: Teo Zheng Yang
      Education: Bachelor of Computing in Computer Science, NUS (Aug 2022 – Present)
      Focus Areas: Database Systems, Artificial Intelligence
      Scholarship: NUS Merit Scholar
      Contact: +65 91678535 | teozhengyang01@gmail.com
      Links: GitHub (https://github.com/teozhengyang), LinkedIn (https://www.linkedin.com/in/teozhengyang/), Portfolio (https://personal-website-teozhengyangs-projects.vercel.app/)
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

      === Job Seeking Status ===
      - Available for internship: Jan – Jun 2026
      - Available for full-time: Jul/Aug 2026

      Tone & Style:
      - Keep answers factual, friendly, professional and concise.
      - Keep the response under 150 words.
      - Encourage engagement with Zheng Yang's work.
      - Never fabricate details outside the provided information.
      `;

      // Prepare messages
      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory.slice(-6), // Keep last 6 messages for context
        { role: 'user', content: userMessage }
      ];

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
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content;

      if (aiResponse) {
        return { success: true, response: aiResponse };
      }

      return { success: false, fallback: true };
    } catch (error) {
      console.error('Direct Groq API call failed:', error);
      return { success: false, fallback: true };
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for greeting patterns
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return getRandomResponse(botResponses.greeting);
    }
    
    // Check for project-related queries
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return getRandomResponse(botResponses.projects);
    }
    
    // Check for about queries
    if (message.includes('about') || message.includes('who') || message.includes('background')) {
      return getRandomResponse(botResponses.about);
    }
    
    // Check for contact queries
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return getRandomResponse(botResponses.contact);
    }
    
    // Check for blog queries
    if (message.includes('blog') || message.includes('article') || message.includes('post')) {
      return getRandomResponse(botResponses.blog);
    }
    
    // Default response
    return getRandomResponse(botResponses.default);
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue.trim(),
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare conversation history (convert to API format)
      const conversationHistory = messages
        .filter(msg => msg.sender !== 'bot' || msg.id !== 1) // Exclude initial greeting
        .slice(-6) // Keep last 6 messages for context
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        }));

      // Call the chatbot API
      const apiResult = await callChatbotAPI(currentInput, conversationHistory);
      
      let botResponseText;
      let delay = chatbotConfig.responseDelay;

      if (apiResult.success) {
        botResponseText = apiResult.response;
        delay = 500; // Shorter delay for AI responses
      } else {
        // Fallback to predefined responses
        botResponseText = getBotResponse(currentInput);
      }

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: botResponseText,
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, delay);
      
    } catch (error) {
      console.error('Error getting bot response:', error);
      
      // Fallback to predefined responses on error
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(currentInput),
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, chatbotConfig.responseDelay);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress
  };
}
