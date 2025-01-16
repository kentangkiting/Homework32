import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./details.tsx";
import CounterContextProvider from "./countercontext.tsx";
import TodoContextProvider from "./todocontext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoContextProvider>
      <CounterContextProvider>
        <Router>
          <Routes>
            <Route path="/" Component={App} />
            <Route path="/detail/:id" Component={Details} />
          </Routes>
        </Router>
      </CounterContextProvider>
    </TodoContextProvider>
  </StrictMode>
);
