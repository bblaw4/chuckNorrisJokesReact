import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./footer.css";

function App() {
  const [joke, setJoke] = useState("");
  function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setJoke(data));
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="mx-auto text-white">Chuck Norris Random Jokes</h1>
      </nav>
      <div className="container">
        <div className="mx-auto" style={{ width: 600 }}>
          <p>{joke.value ? joke.value : "You need to Chuck It!"}</p>
        </div>
        <button className="btn btn-primary btn-block" onClick={() => getJoke()}>
          Chuck It!
        </button>
        <div className="footer primary">Brown</div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
