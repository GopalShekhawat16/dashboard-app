import React from 'react';
import './Ecommerce.css';




const Ecommerce = () => {
  return (
    <div className="dashboard">
      <div className="top-cards">
        <div className="card earnings">
          <div className="card-info">
            <p>Earnings</p>
            <h2>3,448</h2>
            
          </div>
          <div className="card-icon">
            
          </div>
        </div>
        <div className="card">Customers<br /><b>10</b></div>
        
        <div className="card">Project Completed <br /><b>39</b></div>
        <div className="card">Members<br /><b>20</b></div>
      </div>

      <div className="revenue-section">
        <div className="revenue-left">
          <h3>Revenue Updates</h3>
          <div className="budget">
            <p>Budget <b>3,438</b> </p>
            <p>Expense <b>28,487</b></p>
           
          </div>
        </div>


        <div className="earnings-box">
          <h4>Earnings</h4>
          <h2>63,664</h2>
          <p>Monthly revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;