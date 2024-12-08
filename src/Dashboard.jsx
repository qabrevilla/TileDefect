import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate(); // Hook for navigation

  // State for file uploads
  const [visualFile, setVisualFile] = useState(null);
  const [soundFile, setSoundFile] = useState(null);

  // State for display summary
  const [defectSummary, setDefectSummary] = useState({
    visualDefects: { crack: 0, scratch: 0, stain: 0 },
    soundDefects: 'None detected',
  });

  const handleLogout = () => {
    navigate('/App');
  };

  // File upload handlers
  const handleVisualFileChange = (e) => {
    setVisualFile(e.target.files[0]);
  };

  const handleSoundFileChange = (e) => {
    setSoundFile(e.target.files[0]);
  };

  const handleFileSubmit = () => {
    if (visualFile && soundFile) {
      // Mock logic for processing files
      setDefectSummary({
        visualDefects: { crack: 1, scratch: 0, stain: 0 },
        soundDefects: 'Hollowed Tile Detected',
      });
      alert('Files processed successfully!');
    } else {
      alert('Please upload both files.');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <h1>Dashboard</h1>

      {/* File Upload Section */}
      <div className="file-upload-section">
        <h2>Upload Files</h2>
        <div className="file-upload">
          <label htmlFor="visual-upload">Visual Defect File:</label>
          <input
            type="file"
            id="visual-upload"
            onChange={handleVisualFileChange}
          />
        </div>
        <div className="file-upload">
          <label htmlFor="sound-upload">Sound Defect File:</label>
          <input
            type="file"
            id="sound-upload"
            onChange={handleSoundFileChange}
          />
        </div>
        <button className="upload-button" onClick={handleFileSubmit}>
          Process Files
        </button>
      </div>

      {/* Overview Section */}
      <div className="dashboard-overview">
        <div className="dashboard-summary">
          <h2>Visual Defects Detected</h2>
          <p>
            Crack: {defectSummary.visualDefects.crack} | Scratch: {defectSummary.visualDefects.scratch} | Stain: {defectSummary.visualDefects.stain}
          </p>
        </div>
        <div className="dashboard-summary">
          <h2>Sound Defect</h2>
          <p>{defectSummary.soundDefects}</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="dashboard-inspection-summary">
        <h3>Inspection Summary</h3>
        <ul>
          <li>Crack: {defectSummary.visualDefects.crack}</li>
          <li>Scratch: {defectSummary.visualDefects.scratch}</li>
          <li>Stain: {defectSummary.visualDefects.stain}</li>
          <li>Sound Defect: {defectSummary.soundDefects}</li>
        </ul>
      </div>
    </div>
  );
}
 
export default Dashboard;
