import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import data from "./data.json";
import Landing from "./Landing";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App1() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  );
}

export default App1;
