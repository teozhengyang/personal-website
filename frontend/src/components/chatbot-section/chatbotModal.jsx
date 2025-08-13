import ChatbotHeader from './chatbotHeader';
import ChatbotMessages from './chatbotMessages';
import ChatbotInput from './chatbotInput';
import useChatbot from '../../hooks/useChatbot';

export default function ChatbotModal({ isOpen, onClose }) {
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress
  } = useChatbot(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] h-96 max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-500 backdrop-blur-sm md:bottom-24 md:right-6 md:w-80">
      <ChatbotHeader onClose={onClose} />
      <ChatbotMessages messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />
      <ChatbotInput 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        handleSendMessage={handleSendMessage} 
        handleKeyPress={handleKeyPress} 
      />
    </div>
  );
}
