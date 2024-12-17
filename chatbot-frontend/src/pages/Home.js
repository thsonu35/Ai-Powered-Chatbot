import React, { useState, useEffect } from "react";
import './styles.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const openChatbot = (bossType) => {
    navigate(`/chatbot/${bossType}`); // Redirect to chatbot route
  };

  useEffect(() => {
    const createRandomEyes = () => {
      const body = document.body;
      const eye = document.createElement("div");
      eye.classList.add("random-eye");

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      eye.style.left = `${x}px`;
      eye.style.top = `${y}px`;

      body.appendChild(eye);

      setTimeout(() => {
        body.removeChild(eye);
      }, 2000); // Remove eye after 2 seconds
    };

    const interval = setInterval(createRandomEyes, 1000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to The Weird Boss Chatbot</h1>
        <p>Apun hi bhagwaan hai (The Big Boss)</p>
      </header>

      {/* Feature Cards */}
      <section className="features">
        <div className="feature-card" onClick={() => openChatbot('Basic')}>
          <h2>Basic ONE</h2>
          <p>Normal boss</p>
          <ul>
            <li>Bas ek baar kaam assign karta hai aur uske baad shayad yaad na kare.</li>
            <li>Follow-up kabhi-kabhi deta hai, magar zyada effort nahi daalta.</li>
            <li>Tasks kabhi bhool bhi jaata hai assign karna ya phir follow-up lena.</li>
          </ul>
        </div>

        <div className="feature-card" onClick={() => openChatbot('Friendly')}>
          <h2>Friendly ONE</h2>
          <p>Friendly nature boss</p>
          <ul>
            <li>Kaam karne ke liye politely request karta hai, kabhi force nahi karta.</li>
            <li>Employees ko motivate karta hai time pe kaam complete karne ke liye.</li>
            <li>Regularly follow-up karta hai, lekin achhe tareeke se.</li>
            <li>Achha kaam karne par appreciation deta hai aur positive environment banata hai.</li>
          </ul>
        </div>

        <div className="feature-card" onClick={() => openChatbot('Big-Boss')}>
          <h2>The Big Boss</h2>
          <p>Weird, aggressive, and monster boss</p>
          <ul>
            <li>Hamesha gusse mein rehta hai, aur task incomplete hone par action leta hai.</li>
            <li>Employees ko daantta hai aur Galia bhi deta hai.</li>
            <li>Ekdum "Gunga" ban ke kaam ke peeche pada rehta hai.</li>
            <li>Kaam khatam hone tak har moment par pressure daalta hai.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>

      {/* Horror Eyes Animation */}
      <div className="horror-eyes">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
      </div>
    </div>
  );
};

export default Home;
