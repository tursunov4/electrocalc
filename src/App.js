import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./untils/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkcode from "./pages/Checkcode/Checkcode";
import Carditem from "./pages/Carditem/Carditem";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route path="carditem/:id" element={<Carditem />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/check-code" element={<Checkcode />} />
      </Routes>
    </div>
  );
};

export default App;
