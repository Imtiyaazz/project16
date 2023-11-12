import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { AddProduct } from "./AddProduct";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addprod" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
