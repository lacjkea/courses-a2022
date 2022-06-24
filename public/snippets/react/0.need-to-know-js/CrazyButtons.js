import { useState } from "react";

function App() {
  const [masterCount, setMasterCount] = useState(0);
  function updateLocalCount() {
    setMasterCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <button onClick={updateLocalCount}>{masterCount}</button>
      <Child masterCount={masterCount} />
      <Child masterCount={masterCount} />
      ...
    </div>
  );
}

function Child({ masterCount }) {
  const [childCount, setChildCount] = useState(0);
  function updateChildCount() {
    setChildCount((prevCount) => prevCount + 1);
  }
  return <button onClick={updateChildCount}>{masterCount + childCount}</button>;
}
export default App;
