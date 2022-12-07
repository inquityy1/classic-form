import { useState } from "react";
import { formTracking } from "./formTracking";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email, "password:", password);
  };

  formTracking();

  return (
    <div className="App">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ backgroundColor: "black", color: "white" }}>
          Click Me
        </button>
      </form>
    </div>
  );
}

export default App;
