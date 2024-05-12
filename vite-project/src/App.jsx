// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import CounterView from './components/ReduxToolkit/features/counter/CounterView';
import TodosView from './components/ReduxToolkit/features/todos/TodosView';

function App() {
  return (
    <div>
      <CounterView />
      <TodosView />
    </div>
  );
}

export default App;
