import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    //this would be correct setCount(prevCount=>prevCount+1)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //or even worse: setCount(count++)
  }
  return <button onClick={increment}>{count}</button>;
}
