async function x() {
  const request = await fetch("/endpoint/");
  const data = await request.json();
}
