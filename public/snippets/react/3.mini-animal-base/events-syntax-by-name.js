function A(props) {
  function simple(evt) {
    //do stuff
  }
  return <button onClick={simple}>Click me</button>;
}

function B(props) {
  const arrow = (evt) => {
    //do stuff
  };
  return <button onClick={arrow}>Click me</button>;
}
