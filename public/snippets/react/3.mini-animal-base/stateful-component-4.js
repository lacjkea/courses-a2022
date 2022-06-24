import { useState } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  function handleClick() {
    //set state to be equal to it's current value + 1
    setCount((prevCount) => prevCount + 1);
  }
  return <button onClick={handleClick}>You've clicked me {count} times</button>;
}
