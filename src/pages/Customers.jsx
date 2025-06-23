import React from 'react';

const TableComponent = () => {
  const users = [
    { id: 1, name: 'Gopal Gupta', Project: 'SmartBiz CRM' },
    { id: 2, name: 'Aman Kharol', Project: 'InvManage (Inventory Manager)' },
    { id: 3, name: 'Riya Paswan', Project: 'MediTrack Pro' },
    { id: 4, name: 'Piyush Goyal', Project: 'Eventora' },
    { id: 5, name: 'Kamal Rathi', Project: 'ShopEase' },
    { id: 6, name: 'Suman Naruka', Project: 'RentHub' },
    { id: 7, name: 'Ritesh Verma', Project: 'EduCore LMS' },
    { id: 8, name: 'Ritik Sharma', Project: 'LogiFlow' },
    { id: 9,name: 'Priya Ahuja', Project: 'MediTrack Pro' },
    { id: 10, name: 'Satwik Bansal', Project: 'SecureDocs Portal' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Customer Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Project</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.Project}</td>
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

