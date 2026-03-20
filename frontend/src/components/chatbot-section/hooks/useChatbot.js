import { useState, useRef, useEffect } from 'react';
import { initialMessage } from '../assets/chatbotText';
import ChatbotService from '../services/chatbot';

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

    // prepare conversation history for context
    const conversationHistory = ChatbotService.prepareConversationHistory(messages);

    // call API to get response
    const response = await ChatbotService.getChatbotResponse(currentInput, conversationHistory); 
    
    // simulate typing delay before showing response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 500);
    
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
