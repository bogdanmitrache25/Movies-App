import React from "react";
import MyRoutes from "./routers/MyRoutes";

const App = () => {
  return (
    <div>
      <header>
        <h1 className="title">🎬Movies App</h1>
      </header>
      <h2 className="author">Made by Bogdan Mitrache </h2>
      <MyRoutes />
    </div>
  );
};

export default App;
