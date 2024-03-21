// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import Card from './components/Card.jsx';
import Data from './data.json'

// app name
const appName = "Todo App";

function App() {
  
  return (
    <div>
      <h1 className="headingStyle">{appName}</h1>
      {Data.map((item, index) => <Card key={index} todoTitle={item.title} todoDesc={item.desc}/>)}
    </div>
  );
}

export default App;
