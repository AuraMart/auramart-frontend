// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Admin/SideBar"

// const AdminLayout = () => {
//   return (
//     <div >
      
//       <Sidebar/>
//       <Outlet/>
//     </div>
//   );
// };

// export default AdminLayout;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";


import Sidebar from "../../components/Admin/SideBar";

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 p-2 hover:bg-blue-300 rounded cursor-pointer">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

const AdminLayout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar>
        <Link to="/admin" className="sidebar-link">
          <SidebarItem icon={<DashboardIcon />} text="Dashboard" />
        </Link>
        <Link to="/admin/profile" className="sidebar-link">
          <SidebarItem icon={<PersonIcon />} text="Profile" />
        </Link>
        <Link to="/admin/add-product" className="sidebar-link">
          <SidebarItem icon={<InventoryIcon />} text="Products" />
        </Link>
        <Link to="/admin/view-orders" className="sidebar-link">
          <SidebarItem icon={<ShoppingBagIcon />} text="Orders" />
        </Link>
        <Link to="/admin/analytics" className="sidebar-link">
          <SidebarItem icon={<BarChartIcon />} text="Analytics" />
        </Link>
        <hr className="my-3" />
        <Link to="/settings" className="sidebar-link">
          <SidebarItem icon={<SettingsIcon />} text="Settings" />
        </Link>
        <Link to="/help" className="sidebar-link">
          <SidebarItem icon={<HelpIcon />} text="Help" />
        </Link>
      </Sidebar>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
