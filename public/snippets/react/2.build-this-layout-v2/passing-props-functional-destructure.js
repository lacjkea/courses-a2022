function App() {
  const user = {
    //could come from a fetch request
    name: "Jonas",
    email: "jofh@kea.dk",
    kids: 3,
  };
  return (
    <div id="app">
      <Navigation {...user} />
    </div>
  );
}

function Navigation(props) {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
      </nav>
      <Profile {...props} />
    </header>
  );
}

function Profile(props) {
  return (
    <div>
      <a href={`mailto:${props.email}`}>{props.name}</a>
    </div>
  );
}
//OR
function Profile({ email, name }) {
  return (
    <div>
      <a href={`mailto:${email}`}>{name}</a>
    </div>
  );
}
