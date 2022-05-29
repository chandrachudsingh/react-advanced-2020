import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  // We could also use separate state values instead of an object
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // We cannot pass just the message or else it wipes-out/overwrites the previous data. So we use 'Spread Operator' to keep the previous data.
    // setPerson({ ...person, message: "hello world" });

    setMessage("hello world");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
