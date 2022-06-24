export default function Test() {
  // prettier-ignore
  const kids = [
    <Kid name="Storm" />, 
    <Kid name="Birk" />, 
    <Kid name="Liv" />
  ];

  return <ul>{kids}</ul>;
}
function Kid(props) {
  return <li>{props.name}</li>;
}
