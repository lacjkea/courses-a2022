function LoginButton(props) {
  return <button>{props.isLoggedIn ? "Log Out" : "Log In"}</button>;
}

function App(props) {
  return (
    <div>
      {articles.length === 0 ? <Loader /> : <List articles={articles} />}
    </div>
  );
}
