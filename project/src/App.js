import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `king ${count}`;
  });

  const Me = () => {
    setInterval(() => setCount((c) => c + 1), 1000);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="click-button" onClick={Me}>
        click
      </button>
      <button className="click-button" onClick={() => setCount(count - 1)}>
        increment
      </button>
    </div>
  );
};

export default App;

// import { useRef, useState, useEffect } from "react";

// function Stopwatch() {
//   const timerIdRef = useRef(0);
//   const [count, setCount] = useState(0);

//   const startHandler = () => {
//     if (timerIdRef.current) {
//       return;
//     }
//     timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
//   };

//   const stopHandler = () => {
//     clearInterval(timerIdRef.current);
//     timerIdRef.current = 0;
//   };

//   useEffect(() => {
//     return () => clearInterval(timerIdRef.current);
//   }, []);

//   return (
//     <div>
//       <div>Timer: {count}s</div>
//       <div>
//         <button onClick={startHandler}>Start</button>
//         <button onClick={stopHandler}>Stop</button>
//       </div>
//     </div>
//   );
// }
// export default Stopwatch;
