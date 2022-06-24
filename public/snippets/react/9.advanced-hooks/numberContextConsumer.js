//components/Consumer.js
import { useContext } from "react";
import { NumberContext } from "../contexts/numberContext";

function Consumer() {
  const myNumber = useContext(NumberContext);
  return (
    <div>
      <span>Here: {myNumber}</span>
    </div>
  );
}
export default Consumer;
