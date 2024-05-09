// this file will be used to handle component rendering

// external import
import React from 'react';

// internal import
import StateLifting from './components/StateLifting/StateLifting';

function App() {
  const [childData, setChildData] = React.useState(null);

  const handleChildData = (data) => {
    console.log(data);
    setChildData(data);
  };

  return (
    <div>
      <h1>App Component</h1>
      <StateLifting onChildData={handleChildData} />
      <h2>{childData}</h2>
    </div>
  );
}

export default App;
