import React from "react";
import { useState, useEffect } from "react";

const CurrentTime = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div>
      <h1 style={{color: props.thema ? "#282929" : "white",}}>Текущее время:</h1>
      <p style={{fontSize: "100px", color: props.thema ? "#282929" : "white"}}>{formattedTime}</p>
    </div>
  );
};

export default CurrentTime;
