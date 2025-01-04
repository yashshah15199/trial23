import React from "react";

function Functional() {
  const shoot = () => {
    alert("Great Shoot");
  };
  return <button onClick={shoot}>Take The Shoot</button>;
}

export default Functional;
