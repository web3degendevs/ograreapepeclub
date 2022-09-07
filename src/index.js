
import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";



let rootContainer = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootContainer);

// Initial render: Render an element to the root.
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
