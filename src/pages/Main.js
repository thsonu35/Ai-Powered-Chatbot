import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Chatbot from './Chatbot'; // New chatbot component

// import Onboarding from './Onboarding';
// import Dashboard from './Dashboard';
// import Settings from './Settings';
// import Customize from './Customize';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            {/* Un-comment and edit links for other pages */}
            {/* <li><Link to="/onboarding" className="hover:underline">Onboarding</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/settings" className="hover:underline">Settings</Link></li>
            <li><Link to="/customize" className="hover:underline">Customize</Link></li> */}
          </ul>
        </nav>

        {/* Page Content */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot/:bossType" element={<Chatbot />} />

            {/* Uncomment and add Routes for other pages */}
            {/* <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customize" element={<Customize />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
