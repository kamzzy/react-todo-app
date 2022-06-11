import React from "react";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Categories from "./components/Categories";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;