// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import List from './components/UniqueList/List';
import NestedList from './components/NestedMapping/Nested';
import ClassComp from './components/ClassComponent/ClassComp';
import State from './components/State/State';
import Pages from './components/ConditionalRendering/Pages';

// app name
const appName = "Todo App";

function App() {

  return (
    <div>
      <Pages />
    </div>
  );
}

export default App;
