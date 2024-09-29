import React from "react";
import Login from "./Login";

let loggedIn = false;

function App() {
  return (
    <div className="container">
      {loggedIn ? (
        <h1>Hello</h1>
      ) : (
        <div>
          <h1>Hello</h1> <Login />
        </div>
      )}
    </div>
  );
}

export default App;
