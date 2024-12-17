import React from 'react';

const Message = ({ sender, text }) => {
  const isBot = sender === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-2`}>
      <div
        className={`p-2 rounded-lg ${
          isBot ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
