import React from "react";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist"
import Search from "./pages/Search"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Wishlist />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}
