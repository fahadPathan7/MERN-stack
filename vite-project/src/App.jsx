// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import List from './components/UniqueList/List';
import NestedList from './components/NestedMapping/Nested';

// app name
const appName = "Todo App";

function App() {

  return (
    <div>
      <h1 className="headingStyle">{appName}</h1>
      <NestedList />
    </div>
  );
}

export default App;
