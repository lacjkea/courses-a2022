import { useState } from "react";

export default function Greeter() {
  const [title, setTitle] = useState("Sir");
  function handleClick() {
    //just overwrite state
    setTitle("Lord");
  }
  return <button onClick={handleClick}>Welcome {title} Jonas</button>;
}
