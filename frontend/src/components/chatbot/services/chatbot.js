import { systemPrompt } from '../constants/chatbotText';

class ChatbotService {
 
  async getChatbotResponse(userMessage, conversationHistory = []) {
    // direct Groq API call in development
    if (import.meta.env.DEV) { 
      return await this.callDevGroqAPI(userMessage, conversationHistory);
    } else { // serverless API call in production
      return await this.callServerlessGroqAPI(userMessage, conversationHistory);
    }
  }

  async callDevGroqAPI(userMessage, conversationHistory = []) {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    // handle missing API key
    if (!apiKey) {
      console.error('API key not found');
      return { text: 'Something went wrong. Try again later.', isError: true };
    }

    try {
      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage }
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

      console.log('API response', response);

      // Handle non-200 responses
      if (!response.ok) {
        console.error('API error:', response.status, response.statusText);
        return { text: 'Something went wrong. Try again later.', isError: true };
      }

      const data = await response.json();
      const message = data.choices[0]?.message?.content;

      // return message if exists
      if (message) {
        return { text: message, isError: false };
      } else {
        console.error('No response from API');
        return { text: 'Something went wrong. Try again later.', isError: true };
      }
    } catch (error) { // handle other errors
      console.error('API call failed:', error);
      return { text: 'Something went wrong. Try again later.', isError: true };
    }
  }

  async callServerlessGroqAPI(userMessage, conversationHistory = []) {
    try {
      // call serverless API
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

      // handle non-200 responses
      if (!response.ok) {
        console.error('API error:', response.status, response.statusText);
        return { text: 'Something went wrong. Try again later.', isError: true };
      }

      // Check content type before parsing JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('API response is not JSON:', contentType);
        return { text: 'Something went wrong. Try again later.', isError: true };
      }

      const data = await response.json();

      // return message if exists
      if (data.success && data.response) {
        return { text: data.response, isError: false };
      } else {
        console.error('No response from API');
        return { text: 'Something went wrong. Try again later.', isError: true };
      }
    } catch (error) {
      console.error('API call failed:', error);
      return { text: 'Something went wrong. Try again later.', isError: true };
    }
  }

  // save last 6 messages for context, excluding the initial bot greeting
  prepareConversationHistory(messages) {
    return messages
      .filter(msg => msg.sender !== 'bot' || msg.id !== 1)
      .slice(-6)
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
  }
}

export default new ChatbotService();