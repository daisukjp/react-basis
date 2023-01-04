import React, { StrictMode } from "react";
import ReactDom from "react-dom";

// import App from "./App";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>How are you?</p>
    </>
  );
};

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
