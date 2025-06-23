import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pieChartData = [
  { name: 'Jan', projects: 5 },
  { name: 'Feb', projects: 8 },
  { name: 'Mar', projects: 4 },
  { name: 'Apr', projects: 9 },
  { name: 'May', projects: 6 },
  { name: 'Jun', projects: 7 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a52a2a', '#00bcd4'];

const PieChartPage = () => {
  return (
    <div>
      <h2>Project Distribution by Month</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="projects"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartPage;
