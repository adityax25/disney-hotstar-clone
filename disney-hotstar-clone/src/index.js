import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Provider from "./Provider";
// import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
