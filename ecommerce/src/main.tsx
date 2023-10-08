import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProductsContextProvider } from "./context/ProductsSection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProductsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProductsContextProvider>
  </React.StrictMode>
);
