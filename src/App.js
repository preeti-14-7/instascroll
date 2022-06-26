import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Home from "./Home";
import './style/app.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/insta-scroll" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}