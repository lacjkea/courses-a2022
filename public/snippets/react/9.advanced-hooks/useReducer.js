import { useReducer } from "react";

const initialState = {
  value: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        value: state.value + 1,
      };
    case "DECREASE":
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};

function Button() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onDecrease = () => dispatch({ type: "DECREASE" });
  const onIncrease = () => dispatch({ type: "INCREASE" });
  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <span>{state.value}</span>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Button;
