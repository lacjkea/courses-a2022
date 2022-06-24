function Parent(props) {
  const myCallback = (e) => {
    console.log("a child sent this up", e);
  };
  return <Child onClick={myCallback} />;
}

function Child(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}
