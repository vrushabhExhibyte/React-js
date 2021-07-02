import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time);

  const UpdTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdTime, 1000);
  return (
    <div className="container">
      <h1 className="clock">{cTime}</h1>{" "}
    </div>
  );
};

export default App;
