import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../layouts/home/home";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Default from "../layouts/default/default";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Default" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}