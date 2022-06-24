//App.js
import { NumberProvider } from "./contexts/numberContext";
import Consumer from "./components/Consumer";

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <h1>hello world</h1>
        <Consumer />
        <Consumer />
      </div>
    </NumberProvider>
  );
}
