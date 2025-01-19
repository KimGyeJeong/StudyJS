import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import HashtagPage from './pages/HashtagPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hashtag/:tag" element={<HashtagPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Router>
  );
};

export default App;
