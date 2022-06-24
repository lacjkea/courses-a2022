import { useState } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return <button>You've clicked me {count} times</button>;
}
