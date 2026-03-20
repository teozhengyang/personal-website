import { useState } from 'react';
import ChatbotModal from './components/chatbotModal';
import ChatbotButton from './components/chatbotButton';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatbotButton onClick={toggleChatbot} isOpen={isOpen} />
      <ChatbotModal isOpen={isOpen} />
    </>
  );
}
