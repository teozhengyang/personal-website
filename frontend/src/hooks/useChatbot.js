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

  const handleSendMessage = () => {
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

    // Simulate bot response with delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(currentInput),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, chatbotConfig.responseDelay);
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
