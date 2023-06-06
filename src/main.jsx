import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavbarContextProvider from "./components/NavbarContext"; 

ReactDOM.createRoot(document.getElementById("root")).render( 

  <NavbarContextProvider>
    <App />
  </NavbarContextProvider> 
);
