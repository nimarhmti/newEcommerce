import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProductsContextProvider } from "./context/ProductsSection.tsx";
import { GlobalCardShopProvider } from "./context/CardSection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProductsContextProvider>
      <GlobalCardShopProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalCardShopProvider>
    </GlobalProductsContextProvider>
  </React.StrictMode>
);
