function AdminMenu() {
  return <button>DELETE EVERYTHING</button>;
}

function Header(props) {
  return (
    <header>
      <SomeMenu />
      {props.isAdmin && <AdminMenu />}
    </header>
  );
}
