import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    navigate('/App'); 
  };

  return (
    <div className="dashboard-container">
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      
      <h1>Dashboard</h1>
      
      {/* Overview Section */}
      <div className="dashboard-overview">
        <div className="dashboard-summary">
          <h2>Visual Defects Detected</h2>
          <p>Crack=0 | Scratch=1 | Stain=1</p> {/* Example number for visual defects */}
        </div>
        <div className="dashboard-summary">
          <h2>Sound Defect</h2>
          <p>Hollowed Tile</p> {/* Example breakdown */}
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="dashboard-inspection-summary">
        <h3>Inspection Summary</h3>
        <ul>
          <li>Crack=0</li>
          <li>Scratch=0</li>
          <li>Stain=0</li>
          <li>Hollowed Tiles = True</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
