import React from "react";
import Home from "./Componets/Home";
import Nav from "./Componets/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./Componets/Login";
import Signup from "./Componets/Signup";
import Example from "./Componets/Example";
import { IconName } from "@heroicons/react";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Example />
    </div>
  );
}

export default App;
