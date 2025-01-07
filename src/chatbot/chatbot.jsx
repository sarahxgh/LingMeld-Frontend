import React, { useState, useEffect, useRef } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './Chatbot.css'; // Custom CSS for styling
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

const bot_job  = "Your name is Tarjaman 'تَرْجَمَان', you are a helpful assistant for translation students. Assist them with their questions or translate text between Arabic and English. If the question is unrelated to translation apologize to the user and explain that you cannot answer unrelated questions. \nThe user's question:";

const sendMessageToModel = async (message, modelUrl) => {
  const api_key = "SG_d3b7b8ec5bbdd1f7";
  const data = { messages: [ {
    "role": 'system',
    "content": 'Your name is Tarjaman "تَرْجَمَان", you are a helpful assistant for translation students. Assist them with their questions or translate text between Arabic and English.',
  },
  { "role": "user", "content": message }] };

  try {
    const response = await axios.post(modelUrl, data, {
      headers: { 'x-api-key': api_key },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return { error: 'Failed to get a response from the model' };
  }
};

const MessageInput = ({ input, setInput, handleSendMessage, isThinking }) => (
  <div className="message-input-container">
    <input
      type="text"
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
      className="text-input"
    />
    <button
      onClick={handleSendMessage}
      className="send-button"
      disabled={isThinking}
    >
      <FaPaperPlane />
    </button>
  </div>
);

const ChatBubble = ({ message, fromUser }) => (
  <div className={`chat-bubble ${fromUser ? 'user' : 'assistant'} p-10`}>
    <div className="bubble-content">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {message}
      </ReactMarkdown>
    </div>
  </div>
);

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Do you want to keep the current conversation or start a new one?</p>
        <div className="modal-choice">
          <button onClick={() => onConfirm(true)} className="modal-button">Keep Conversation</button>
          <button onClick={() => onConfirm(false)} className="modal-button">Start New Conversation</button>
          <button onClick={onClose} className="modal-button cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      "role": 'system',
      "content": 'Your name is Tarjaman "تَرْجَمَان", you are a helpful assistant for translation students. Assist them with their questions or translate text between Arabic and English.',
    },
    { "role": 'assistant', "content": 'Hello! How can I assist you?' },
  ]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [isThinking, setIsThinking] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const chatbotContainerRef = useRef(null);  // Create a ref for the chatbot container

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { role: 'user', content: input }]);
      setInput('');
      setIsThinking(true);

      const modelUrls = {
        'gpt-4o': 'https://api.segmind.com/v1/gpt-4o',
        'llama-v3p1': 'https://api.segmind.com/v1/llama-v3p1-405b-instruct',
        'gemini-1.5': 'https://api.segmind.com/v1/gemini-1.5-pro',
      };

      const response = await sendMessageToModel(input, modelUrls[selectedModel]);

      setMessages((prev) => [
        ...prev,
        {
          "role": 'assistant',
          "content": response.error || response.choices[0].message.content,
        },
      ]);
      setIsThinking(false);
    }
  };

  const handleModelChange = (newModel) => {
    setSelectedModel(newModel);
    if (messages.length > 1) {
      setShowConfirmation(true);
    }
  };

  const confirmModelChange = (confirm) => {
    if (confirm) {
      setSelectedModel(selectedModel);
    } else {
      setMessages([]); // Clear chat messages if starting a new conversation
      setSelectedModel(selectedModel);
    }
    setShowConfirmation(false);
  };

  // Auto-scroll to the bottom of the chatbot container whenever messages change
  useEffect(() => {
    if (chatbotContainerRef.current) {
      chatbotContainerRef.current.scrollTop = chatbotContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 overflow-hidden">
  <Modal
    show={showConfirmation}
    onClose={() => setShowConfirmation(false)}
    onConfirm={confirmModelChange}
  />

  <div className="flex justify-center items-center p-4 bg-gray-200 border-b border-gray-300">
    <select
      onChange={(e) => handleModelChange(e.target.value)}
      value={selectedModel}
      className="p-2 border border-gray-300 rounded-lg outline-none bg-white text-sm text-gray-700 cursor-pointer focus:border-lime-500 focus:ring focus:ring-lime-200"
    >
      <option value="gpt-4o">GPT-4O</option>
      <option value="llama-v3p1">LLaMA v3.1</option>
      <option value="gemini-1.5">Gemini 1.5</option>
    </select>
  </div>

  <div className="flex-1 p-4 overflow-y-auto bg-white">
    {messages
      .filter((msg) => msg.role !== 'system') // Exclude the system message
      .map((msg, index) => (
        <ChatBubble key={index} message={msg.content} fromUser={msg.role === 'user'} />
      ))}
    {isThinking && (
      <span className="flex justify-between w-8 mx-auto">
        <span className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></span>
        <span className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-150"></span>
        <span className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-300"></span>
      </span>
    )}
  </div>

  <div className="flex items-center p-4 border-t border-gray-300 bg-white">
    <MessageInput
      input={input}
      setInput={setInput}
      handleSendMessage={handleSendMessage}
      isThinking={isThinking}
    />
  </div>
</div>
)};
