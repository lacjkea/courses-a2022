function App() {
  const user = {
    //could come from a fetch request
    name: "Jonas",
    email: "jofh@kea.dk",
    kids: 3,
  };
  return (
    <div id="app">
      <Navigation name={user.name} email={user.email} />
    </div>
  );
}

function Navigation(props) {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
      </nav>
      <Profile name={props.name} email={props.email} />
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
