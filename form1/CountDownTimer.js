import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(10);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>{seconds}s</div>
      <div>
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
