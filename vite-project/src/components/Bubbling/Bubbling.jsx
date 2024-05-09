import React from "react";

const Bubbling = () => {
  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child clicked");
  };
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Child</button>
    </div>
  );
}

export default Bubbling;
