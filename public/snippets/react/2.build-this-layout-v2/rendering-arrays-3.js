export default function Test() {
  const kids = ["Storm", "Birk", "Liv"];
  const mapped = kids.map((kid) => <Kid name={kid} />);

  return <ul>{mapped}</ul>;
}
function Kid(props) {
  return <li>{props.name}</li>;
}
