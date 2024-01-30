import React, { useState, useRef } from 'react';
//import './DropZone.css'; // Styles for the drop zone

const DropZone = ({ onFilesDropped }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [droppedImages, setDroppedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    setDroppedImages(imageFiles);
    onFilesDropped(imageFiles);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    setDroppedImages(imageFiles);
    onFilesDropped(imageFiles);
  };

  const handleDropZoneClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleDropZoneClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        multiple
      />
      {/* Conditionally render text based on whether there are dropped images */}
      {droppedImages.length === 0 && <p>Drag & Drop Images Here or Click to Select</p>}
      <div className="dropped-images">
        {droppedImages.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Dropped Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default DropZone;
