import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [time, setTime] = useState({
    min: "00",
    sec: "00",
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let id;
    if (props.isActive) {
      id = setInterval(() => {
        const secondCounter = `${counter % 60}`.padStart(2, "0");
        const minuteCounter = `${Math.floor(counter / 60)}`.padStart(2, "0");
        setTime({
          min: minuteCounter,
          sec: secondCounter,
        });
        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [props.isActive, counter]);

  return (
    <div className="timer" ref={props.timerRef}>
      <span id="min">{time.min}</span>
      <span>:</span>
      <span id="sec">{time.sec}</span>
    </div>
  );
};

export default Timer;
