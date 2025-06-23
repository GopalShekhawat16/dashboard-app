import React from 'react';

const TableComponent = () => {
  const users = [
    { id: 1, name: 'Vijay Pratap', Position: 'Business Analyst' },
    { id: 2, name: 'Vikas Yadav', Position: 'Project Manager' },
    { id: 3, name: 'Ritu modi', Position: 'Business Analyst' },
    { id: 4, name: 'Priyanshu Verma', Position: 'Technical Lead ' },
    { id: 5, name: 'Ritik Rathi', Position: 'UI/UX Designer' },
    { id: 6, name: 'Sunita Naruka', Position: 'Project Manager' },
    { id: 7, name: 'Ritesh Goyal', Position: 'UI/UX Designer' },
    { id: 8, name: 'Kamal Sharma', Position: 'UI/UX Designer' },
    { id: 9,name: 'Priti Kumari', Position: 'Project Manager' },
    { id: 10, name: 'Himansh Khurana', Position: 'Quality Assurance' },
    { id: 11, name: 'Harsh Raina', Position: 'Technical Lead ' },
    { id: 12, name: 'Simran kaur', Position: 'Business Analyst' },
    { id: 13, name: 'Varun Yadav', Position: 'Quality Assurance' },
    { id: 14, name: 'Sukesh Tyagi', Position: 'Technical Lead ' },
    { id: 15, name: 'Sakshi Saxena', Position: 'UI/UX Designer' },
    { id: 16, name: 'Kamlesh Jangir', Position: 'UI/UX Designer' },
    { id: 17, name: 'Ritu Shukla', Position: 'Business Analyst' },
    { id: 18, name: 'Harsh Bansal', Position: 'Quality Assurance' }

  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employees Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.Position}</td>
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

