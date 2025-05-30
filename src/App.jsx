import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#020617] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
