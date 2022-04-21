import React from 'react';
import './index.css';
import App from './App';
import NavBar from './components/Nav'
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Duke from "./routes/Duke"
import Tubby from "./routes/Tubby"
import Perry from "./routes/Perry"
import Whiskey from "./routes/Whiskey"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/dogs" element={<App />} />
      <Route path="/dogs/Duke" element={<Duke />} />
      <Route path="/dogs/Tubby" element={<Tubby />} />
      <Route path="/dogs/Perry" element={<Perry />} />
      <Route path="/dogs/Whiskey" element={<Whiskey />} />
      <Route path="*" element={<Navigate to="/dogs" replace />}
    />
    </Routes>
  </BrowserRouter>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
