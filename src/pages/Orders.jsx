import React from 'react';

const TableComponent = () => {
  const users = [
    { pid: 1, pname: 'SmartBiz CRM', Description: 'Manage clients, leads, deals, and tasks with simple workflows.' },
    { pid: 2, pname: 'MediTrack Pro', Description: 'Helps clinics maintain records, automate billing, and schedule visits.' },
    { pid: 3, pname: ' InvManage', Description: 'Track inventory levels, product movements, and supplier relations easily.' },
    { pid: 4, pname: 'Eventora', Description: 'Plan, manage, and organize events, guests, and vendors seamlessly. ' },
    { pid: 5, pname: ' ShopEase', Description: 'Custom e-commerce platform for local shops to sell products online.' },
    { pid: 6, pname: 'EduCore LMS', Description: 'Conduct quizzes, track attendance, and assign homework easily.' },
    { pid: 7, pname: ' RentHub', Description: 'Rent and lease property listings with tenant and owner management.' },
    { pid: 8, pname: ' LogiFlow', Description: 'Track shipments, deliveries, routes, and warehouse stock in real-time.' },
    { pid: 9,pname: 'TaskZen', Description: 'Prioritize work, assign duties, and track daily progress visually.' },
    { pid: 10, pname: 'SecureDocs Portal', Description: 'Designed for law firms, HR, and admin document handling.' },
    { pid: 11, pname: 'FitTrackr', Description: 'Fitness tracker app with goals, calories, and progress insights. ' },
    { pid: 12, pname: ' PayMate', Description: 'Automates monthly slips, leaves, and payment breakdowns easily.' },
    { pid: 13, pname: 'FoodieFleet', Description: 'Supports table bookings, online menus, and payment gateways.' },
    { pid: 14, pname: ' HelpDesk Pro', Description: 'Enables fast resolution, escalation, and user satisfaction tracking.' },
    { pid: 15, pname: 'TourNest', Description: 'Offers destination info, custom packages, and online payment options.' },

  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employees Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>PID</th>
            <th style={thStyle}>PName</th>
            <th style={thStyle}>Descrition</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.pid}</td>
              <td style={tdStyle}>{user.pname}</td>
              <td style={tdStyle}>{user.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left'
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '10px'
};

export default TableComponent;

