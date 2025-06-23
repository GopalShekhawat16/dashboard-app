import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const barChartData = [
  { month: 'Jan', projects: 5 },
  { month: 'Feb', projects: 8 },
  { month: 'Mar', projects: 4 },
  { month: 'Apr', projects: 9 },
  { month: 'May', projects: 6 },
  { month: 'Jun', projects: 7 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #ccc',
        padding: '8px',
        fontSize: '14px'
      }}>
        <p><strong>{label}</strong></p>
        <p>Projects: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const BarChartPage = () => {
  return (
    <div>
      <h2>Bar Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" /> 
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="projects" fill="#8884d8" /> 
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartPage;
