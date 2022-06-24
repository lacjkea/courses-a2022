export default function Button(props) {
  if (props.disabled) {
    return <button disabled={true}>Please wait</button>;
  }
  return <button>Click, you know you want to</button>;
}
