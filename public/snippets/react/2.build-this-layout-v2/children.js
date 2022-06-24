function App() {
  return (
    <div>
      <Card title="Here's the title">
        <p>And a paragraph</p>
        <p>or two</p>
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
