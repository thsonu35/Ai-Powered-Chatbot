import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Chatbot = () => {
  const { bossType } = useParams();

  // Define valid boss types
  const validBossTypes = ["basic", "friendly", "aggressive"];

  // If bossType is invalid, show "You are fired"
  if (!validBossTypes.includes(bossType)) {
    return (
      <div className="error-container">
        <h1 className="error-heading">🔥 YOU ARE FIRED! 🔥</h1>
        <p>You tried to do Unethical things</p>
      </div>
    );
  }

  // Define theme styles based on bossType
  const theme = {
    basic: {
      container: "chatbot-container basic-theme",
      header: "Basic Chatbot",
    },
    friendly: {
      container: "chatbot-container friendly-theme",
      header: "Friendly Chatbot",
    },
    aggressive: {
      container: "chatbot-container aggressive-theme",
      header: "Aggressive Chatbot",
    },
  };

  const currentTheme = theme[bossType];

  return (
    <div className={currentTheme.container}>
      <div className="chatbot-header">
        <h2>{currentTheme.header}</h2>
      </div>
      <div className="chatbot-messages">
        <p>Hi, I am your {bossType.toUpperCase()} chatbot! How can I assist you today?</p>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message here..." />
      </div>
    </div>
  );
};

export default Chatbot;
