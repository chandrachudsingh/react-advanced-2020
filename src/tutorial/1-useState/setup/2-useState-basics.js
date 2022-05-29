import React, { useState } from "react";
// useState - function

// Hooks
// Components name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title"); // Destructuring value returned by useState as it returns an array [current state, fn that updates curr state].
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
