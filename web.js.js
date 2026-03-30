const { useState } = React;

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="container">
      <h2>React Webpage</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello, {name}! 👋</p>}

      <h3>Counter: {count}</h3>

      <button
        className="increment"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="decrement"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);