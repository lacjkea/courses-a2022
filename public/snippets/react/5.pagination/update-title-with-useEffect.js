import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>;
}
