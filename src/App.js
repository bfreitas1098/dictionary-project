import React from "react";
import Search from "./Search";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">My Favorite Dictionary</header>
        <Search />
      </div>
    </div>
  );
}

export default App;
