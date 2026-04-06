import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
 <>
    <Toaster position="top-right" toastOptions={{
    style: {
      background: "#16a34a",
      color: "#fff",
    },
  }} reverseOrder={false} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);