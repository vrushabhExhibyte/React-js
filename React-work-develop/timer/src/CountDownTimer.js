// import React, { useState, useEffect } from "react";

// const CountDownTimer = () => {
//   const [seconds, setSeconds] = useState(10);
//   const [isActive, setIsActive] = useState(true);

//   const toggle = () => {
//     setIsActive(!isActive);
//   };

//   const reset = () => {
//     setSeconds(10);
//     setIsActive(false);
//   };

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((seconds) => seconds - 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   return (
//     <div>
//       <div>{seconds}s</div>
//       <div>
//         <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
//         <button className="button" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountDownTimer;

import React, { useRef, useEffect, useState } from "react";

export default function CountDownTimer() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  const reset = () => {
    setNum(100);
    setPause(false);
  };

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <div>
      <div>{num}</div>
      <button className="colors" onClick={handleClick}>
        {pause ? "Run" : "Pause"}
      </button>
      <button className="colors" onClick={reset}>
        reset
      </button>
    </div>
  );
}
