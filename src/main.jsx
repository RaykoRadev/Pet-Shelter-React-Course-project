// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

//todo unable strict mode and to find how to stop poping alert when component unmount and request is aborted

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </StrictMode>
);
