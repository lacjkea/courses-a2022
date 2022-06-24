export default function EventTester(props) {
  function clicked(e) {
    console.log("I was clicked");
  }
  return (
    <article>
      <button onClick={clicked}>Click me</button>
    </article>
  );
}
