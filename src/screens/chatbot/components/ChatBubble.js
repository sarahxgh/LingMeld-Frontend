// ChatBubble.js
import React from 'react';

const ChatBubble = ({ message, fromUser }) => (
  <div className={`${fromUser ? 'text-right' : 'text-left'} mb-4`}>
    <span
      className={`text-sm inline-block px-4 py-2 rounded-2xl max-w-xs ${
        fromUser ? 'bg-gradient-to-r from-lime-500 to-lime-500 text-white' : 'bg-gray-100 text-gray-800'
      }`}
      style={{ wordBreak: 'break-word' }}
    >
      {message}
    </span>
  </div>
);

export default ChatBubble;
