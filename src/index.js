import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";

import ScrollToTop from "./componets/ScrollToTop";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <ScrollToTop />
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
