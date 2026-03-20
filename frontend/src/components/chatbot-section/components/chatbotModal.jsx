import ChatbotMessages from './chatbotMessages';
import ChatbotInput from './chatbotInput';
import useChatbot from '../hooks/useChatbot';

export default function ChatbotModal({ isOpen }) {
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
    <div className="fixed bottom-20 right-4 z-50 w-80 h-96 bg-[#16181D] rounded-2xl border border-[#6699CC]/30 
                    flex flex-col overflow-hidden bottom-24 right-6">
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
