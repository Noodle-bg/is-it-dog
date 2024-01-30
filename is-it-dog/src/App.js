import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import DropZone from './DropZone';

const App = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  // Handle dropped files
  const handleFilesDropped = (files) => {
    setDroppedFiles(files);
    // Do something with the dropped files (e.g., upload or display)
  };

  return (
    <div>
      <h1>Is It Dog??</h1>
      <DropZone onFilesDropped={handleFilesDropped} />
      <div>
        {/* Render dropped files */}
        {droppedFiles.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;

