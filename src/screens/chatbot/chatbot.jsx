// App.js
import React, { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import { Send as SendIcon, AttachFile as AttachFileIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';

const MessageInput = () => {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    // Handle message sending logic here
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    const files = event.target.files;
    console.log(files); // For now, just log the files
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        borderTop: '1px solid #eaecef',
        backgroundColor: 'white',
      }}
    >
      {/* File input */}
      <input
        type="file"
        id="file-upload"
        onChange={handleFileUpload}
        style={{
          display: 'none', // Hide the default file input
        }}
      />
      <label htmlFor="file-upload">
        <AttachFileIcon
          sx={{
            color: '#6c757d',
            cursor: 'pointer',
            '&:hover': {
              color: '#495057',
            },
            marginRight: 2,
          }}
        />
      </label>

      {/* Message input */}
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
        style={{
          flex: 1,
          padding: '8px 12px',
          borderRadius: '30px',
          border: '1px solid #ddd',
          backgroundColor: '#f7f7f7',
          fontSize: '14px',
          outline: 'none',
          marginRight: '8px',
        }}
      />

      {/* Send button */}
      <SendIcon
        onClick={handleSendMessage}
        sx={{
          color: '#84cc16',
          cursor: 'pointer',
          '&:hover': {
            color: '#218838',
          },
        }}
      />
    </Box>
  );
};

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { message: 'How are you?', fromUser: true },
    { message: 'woohoooo', fromUser: true },
    { message: 'Haha oh man', fromUser: true },
    { message: "Haha that's terrifying 😂", fromUser: true },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epicWow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: 'omg, this is amazing', fromUser: false },
    { message: 'perfect ✅', fromUser: false },
    { message: 'Wow, this is really epic', fromUser: false },
    { message: 'just ideas for next time', fromUser: false },
    { message: "I'll be there in 2 mins ⏱️", fromUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user's message
      setMessages([...messages, { message: input, fromUser: true }]);
      setInput('');

      // Add bot's response (dummy response for now)
      setTimeout(() => {
        const botResponse = "I'm here to help!";
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: botResponse, fromUser: false },
        ]);
      }, 500);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg.message} fromUser={msg.fromUser} />
          ))}
        </div>

        {/* Message Input */}
        {MessageInput()}
            
      </div>
    </div>
  );
};
