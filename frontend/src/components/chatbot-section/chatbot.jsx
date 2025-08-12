import { useState } from 'react';
import ChatbotModal from './chatbotModal';
import ChatbotButton from './chatbotButton';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatbotButton onClick={toggleChatbot} isOpen={isOpen} />
      <ChatbotModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
