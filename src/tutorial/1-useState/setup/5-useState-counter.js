import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  // Functional approach to setValue
  const complexIncrease = () => {
    setTimeout(() => {
      // Problem with the next line - If we click more than 1 time at the same time, it will increase only by 1 after 2 sec, because the value gets updated 2 sec later so it gets the prev. value on every click within 2 sec.
      // setValue(value + 1);

      // Here we catch the prev value & increase it moment the button is clicked and
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
