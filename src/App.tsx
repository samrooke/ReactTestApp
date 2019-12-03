import React from 'react';
import './App.scss';
import Router from './routing/Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;