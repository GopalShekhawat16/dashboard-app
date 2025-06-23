import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import ColorPicker from './pages/ColorPicker';
import LineChart from './pages/LineChart';
import AreaChart from './pages/AreaChart';
import BarChart from './pages/BarChart';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">

          <Sidebar />
          <main className="main-content">
            <Navbar /> 
            <Routes>
              <Route path="/dashboard" element={<Ecommerce />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/Ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />             
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/area" element={<AreaChart />} />
              <Route path="/bar" element={<BarChart />} />

            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;


