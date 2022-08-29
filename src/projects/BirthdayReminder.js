import React, { useState } from "react";

import { data } from "./data";
import "./BirthdayReminder.css";

const BirthdayReminder = () => {
  const [dogs, setDogs] = useState(data);
  let count = dogs.length;
  if (count == 0) {
    count = "No";
  }

  const removeDog = (id) => {
    let newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
  };
  const removeAllDogs = () => {
    setDogs([]);
  };

  return (
    <>
      <h1 className="dayHeading">{count} Birthdays Today</h1>
      {dogs.map((dog) => {
        const { id, name, age, img } = dog;
        return (
          <div key={id} className="dog">
            <img className="dogImg" src={img} alt="" />
            <div className="dogInfo">
              <h1 className="dogName">{name}</h1>
              <h3 className="dogAge">{age} years</h3>
            </div>
            <button className="removeBtn btn" onClick={() => removeDog(id)}>
              X
            </button>
          </div>
        );
      })}
      <button className="removeAllBtn btn" onClick={removeAllDogs}>
        Remove All
      </button>
    </>
  );
};

export default BirthdayReminder;
