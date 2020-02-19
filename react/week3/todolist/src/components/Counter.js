import React, { useState, useEffect } from "react";

function Counter() {
  // timer that counts how long time a users has spent on the website
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return <p>You have used {count} seconds on this website</p>;
}

export default Counter;
