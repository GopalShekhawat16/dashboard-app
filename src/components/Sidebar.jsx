import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineShopping, AiOutlineUser, AiOutlineCalendar, AiOutlineBarChart,
  AiOutlineLineChart, AiOutlineEdit, AiOutlineBgColors
} from 'react-icons/ai';
import './Sidebar.css';

const menu = [
  {
    title: 'DASHBOARD',
    links: [
      { name: 'Overview', path: '/', icon: <AiOutlineShopping /> }
    ]
  },
  {
    title: 'PAGES',
    links: [
      { name: 'Assignment', path: '/orders', icon: <AiOutlineShopping /> },
      { name: 'Members', path: '/employees', icon: <AiOutlineUser /> },
      { name: 'Customers', path: '/customers', icon: <AiOutlineUser /> }
    ]
  },
  {
    title: 'APPS',
    links: [
      { name: 'Calendar', path: '/calendar', icon: <AiOutlineCalendar /> },
      { name: 'Kanban', path: '/kanban', icon: <AiOutlineBarChart /> },
      { name: 'Color Picker', path: '/color-picker', icon: <AiOutlineBgColors /> }
    ]
  },
  {
    title: 'CHARTS',
    links: [
      { name: 'Line', path: '/line', icon: <AiOutlineLineChart /> },
      { name: 'Pie', path: '/area', icon: <AiOutlineBarChart /> },
      { name: 'Bar', path: '/bar', icon: <AiOutlineBarChart /> }
    ]
  }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {menu.map((section) => (
        <div key={section.title}>
          <p className="sidebar-title">{section.title}</p>
          {section.links.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              className={({ isActive }) =>
                isActive ? 'sidebar-link active' : 'sidebar-link'
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;