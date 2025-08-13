import { useState, useRef, useEffect } from 'react';
import { initialMessage, chatbotConfig } from '../constants/chatbotSection';
import ChatbotService from '../services/Chatbot';

export default function useChatbot(isOpen = false) {
  const [messages, setMessages] = useState(initialMessage);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Scroll to bottom when modal reopens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);


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
      // Prepare conversation history using the service
      const conversationHistory = ChatbotService.prepareConversationHistory(messages);

      // Get chatbot response from service
      const apiResult = await ChatbotService.getChatbotResponse(currentInput, conversationHistory);
      
      let botResponseText;
      let delay = chatbotConfig.responseDelay;

      if (apiResult.success) {
        botResponseText = apiResult.response;
        delay = 500; // Shorter delay for AI responses
      } else {
        // Use fallback response from service
        botResponseText = ChatbotService.getFallbackResponse(currentInput);
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
          text: ChatbotService.getFallbackResponse(currentInput),
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, chatbotConfig.responseDelay);
    }
  };

  // handle submit
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
