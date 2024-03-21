// this file will be used to handle component rendering

// package import
import React from 'react';

// component import
import Card from './components/Card.jsx';

// app name
const appName = "Todo App";

function App() {
  return (
    <div>
      <h1 className="headingStyle">{appName}</h1>
      <Card todoTitle="bazar list" todoDesc="alu peyaj rosun"/>
      <Card />
      <Card />
    </div>
  );
}

export default App;
