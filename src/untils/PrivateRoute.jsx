import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

const PrivateRoutes = () => {
  let auth = {
    status: localStorage.getItem("status"),
  };
  return auth.status ? <Layout /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
