import { systemPrompt, staticBotResponses } from '../constants/chatbotSection';

class ChatbotService {
 
  // Get chatbot response
  async getChatbotResponse(userMessage, conversationHistory = []) {
    // In development, use direct API call since Vercel functions don't work locally
    if (import.meta.env.DEV) {
      return await this.callDevGroqAPI(userMessage, conversationHistory);
    } else {
      // In production, use the serverless API
      return await this.callServerlessGroqAPI(userMessage, conversationHistory);
    }
  }

  // Development environment - Direct Groq API call
  async callDevGroqAPI(userMessage, conversationHistory = []) {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY;
    
    if (!apiKey) {
      console.warn('Groq API key not found for development, using fallback responses');
      return { success: false, fallback: true };
    }

    try {
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
      console.error('Development Groq API call failed:', error);
      return { success: false, fallback: true };
    }
  }

  // Production environment - Serverless API call
  async callServerlessGroqAPI(userMessage, conversationHistory = []) {
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
      console.error('Production chatbot API call failed:', error);
      return { success: false, fallback: true };
    }
  }

  // Get fallback response based on user message patterns
  getFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for greeting patterns
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return this.getRandomResponse(staticBotResponses.greeting);
    }
    
    // Check for project-related queries
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return this.getRandomResponse(staticBotResponses.projects);
    }
    
    // Check for about queries
    if (message.includes('about') || message.includes('who') || message.includes('background')) {
      return this.getRandomResponse(staticBotResponses.about);
    }
    
    // Check for contact queries
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return this.getRandomResponse(staticBotResponses.contact);
    }
    
    // Check for blog queries
    if (message.includes('blog') || message.includes('article') || message.includes('post')) {
      return this.getRandomResponse(staticBotResponses.blog);
    }
    
    // Default response
    return this.getRandomResponse(staticBotResponses.default);
  }

  // Get random response from array
  getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Prepare conversation history for API call
  prepareConversationHistory(messages) {
    return messages
      .filter(msg => msg.sender !== 'bot' || msg.id !== 1) // Exclude initial greeting
      .slice(-6) // Keep last 6 messages for context
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
  }
}

export default new ChatbotService();