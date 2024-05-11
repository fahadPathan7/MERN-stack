// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import Router from './components/ProtectedRouting/Router';
import Toastify from './components/Toastify/Toastify';
import Apps from '../pages/Apps';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
