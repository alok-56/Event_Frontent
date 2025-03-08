import React from "react";
import { useLocation } from "react-router-dom";

import Collaboration from "./AdminPage/Collabration";


const AdminDashboardPage: React.FC = () => {
  const location = useLocation(); 

  return (
    <div>
      {/* <DashBoardNavBar /> */}
      {location.pathname === "/admin/dashboard" ||
      location.pathname === "admin/event" ? (
        <Collaboration />
      ) : (
        <p className="mt-40">ak</p>
      )}
    </div>
  );
};

export default AdminDashboardPage;
