import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  document.title = `You clicked ${count} times`;
  return <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>;
}
