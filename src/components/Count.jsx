import React from "react";

const Count = props => {
  // deconstr props
  const { increment, decrement, value, resetState, nameChange, name } = props;
  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={resetState}>Reset State</button>
      <h3>Name: {name}</h3>
      <button onClick={nameChange}>Change Name</button>
    </div>
  );
};

export default Count;
