import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavbarContextProvider from "./components/NavbarContext";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>

  <NavbarContextProvider>
    <App />
  </NavbarContextProvider>
  </MantineProvider>
);
