import { Navigate, Outlet } from "react-router-dom";
import { cookieInstance } from "../utils/config";

const ProtectedRoute = () => {
  const token = cookieInstance.get("token");
  console.log(token);

  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
