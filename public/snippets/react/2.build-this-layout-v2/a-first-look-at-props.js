function Container() {
  const chief1 = "Jonas";
  return (
    <article>
      <Greeting name={chief1} />
      <Greeting name="Peter" />
      <Greeting name="Dannie" />
    </article>
  );
}
function Greeting(props) {
  return <h1>Hi {props.name}</h1>;
}
