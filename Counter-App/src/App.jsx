import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count">{count}</div>

      <div className="btn-group">
        
        <button className="decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button className="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        
      </div>
    </div>
  );
}

export default App;
