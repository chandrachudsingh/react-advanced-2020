import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize); //to avoid memory leak due to adding mulitple event listeners (for every value) when we resize it everytime.
    // };
  }, []); // or we use [] in dependency to add eventListener only once at initiall rendering
  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
