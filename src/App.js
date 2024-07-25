import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./untils/PrivateRoute";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
