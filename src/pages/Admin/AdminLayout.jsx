import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ListAltIcon from '@mui/icons-material/ListAlt';

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r border-gray-300 shadow-md">
        <nav className="pt-8">
          <ul>
            {[
              { path: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
              { path: 'profile', icon: <PersonIcon />, label: 'Profile' },
              { path: 'add-product', icon: <ListAltIcon />, label: 'Products' },
              { path: 'orders', icon: <ShoppingCartIcon />, label: 'Orders' },
              { path: 'analytics', icon: <BarChartIcon />, label: 'Analytics' },
              { path: 'settings', icon: <SettingsIcon />, label: 'Settings' },
              { path: 'help', icon: <HelpIcon />, label: 'Help' }
            ].map(({ path, icon, label }) => (
              <NavLink
                key={path}
                to={`/admin/${path}`}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 hover:bg-gray-200 ${
                    isActive ? 'bg-gray-200 text-purple-600' : 'text-gray-700'
                  }`
                }
              >
                {React.cloneElement(icon, { className: 'mr-3' })}
                {label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </aside>
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;