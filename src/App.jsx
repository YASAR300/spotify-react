import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './style.css';

const App = () => {
  return (
    <div>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
