import React from 'react';

const Kanban = () => {
  const tasks = [
    { id: 1, title: 'Design Login Page UI', status: 'To Do' },
    { id: 2, title: 'Setup Firebase Authentication ', status: 'To Do' },
    { id: 3, title: 'Create API for User Data ', status: 'To Do' },
    { id: 4, title: 'Write Project Documentation', status: 'To Do' },
    { id: 5, title: 'Research Payment Gateway Integration', status: 'To Do' },
    { id: 6, title: 'Finalize Color Palette & Theme', status: 'To Do' },
    { id: 7, title: 'Create Database Schema', status: 'To Do' },
    { id: 8, title: 'Set Up GitHub Repo', status: 'To Do' },
    { id: 9, title: 'Prepare Project Proposal PDF', status: 'To Do' },
    { id: 10, title: 'Add SEO Meta Tags', status: 'To Do' },
    { id: 11, title: 'Develop Dashboard Layout', status: 'In Progress' },
    { id: 12, title: 'Build React Calendar Component', status: 'In Progress' },
    { id: 13, title: 'Integrate Chat Support Widget', status: 'In Progress' },
    { id: 14, title: 'Test Mobile Responsiveness', status: 'In Progress' },
    { id: 15, title: 'Optimize Images and Assets', status: 'In Progress' },
    
    { id:16, title: 'Create Project Structure in VS Code', status: 'Done' },
    { id: 17, title: 'Install Required NPM Packages', status: 'Done' },
    { id: 18, title: 'Create Navigation Bar Component', status: 'Done' },
    { id: 19, title: 'Add Loading Spinner for API', status: 'Done' },
    { id: 20, title: 'Setup Routing with React Router', status: 'Done' },
    

  ];

  return (
    <div>
      <h2>Kanban Board</h2>
      <div style={{ display: 'flex', gap: '50px' }}>
        {['To Do', 'In Progress', 'Done'].map((column) => (
          <div key={column} style={{ border: '3px solid #ccc', padding: '10px', width: '50%' }}>
            <h3>{column}</h3>
            {tasks
              .filter((task) => task.status === column)
              .map((task) => (
                <div key={task.id} style={{ margin: '10px 0', padding: '5px', backgroundColor: '#f2f2f2' }}>
                  {task.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
