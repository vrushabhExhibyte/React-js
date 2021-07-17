import React, { useState } from "react";

function ThreeCounts() {
  const [count, setCount] = useState("deafult");
  const [color, setColor] = useState("white");

  const handler = () => {
    if (count === "deafult") {
      setCount("active");
      setColor("green");
    } else if (count === "active") {
      setCount("inActive");
      setColor("pink");
    } else if (count === "inActive") {
      setCount("Loading");
      setColor("khaki");
    } else if (count === "Loading") {
      setCount("deafult");
      setColor("yellow");
    }
  };

  return (
    <div className="color" style={{ backgroundColor: color }}>
      <button className="colors" onClick={handler}>
        {count}
      </button>
    </div>
  );
}
export default ThreeCounts;
