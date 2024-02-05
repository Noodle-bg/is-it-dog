import React, { useState } from 'react';
import './FileUpload.css'; // Import your CSS file

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [prediction, setPrediction] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setPreview(URL.createObjectURL(event.target.files[0]));
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log(result); // Log the prediction result
            setPrediction(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.items) {
            if (event.dataTransfer.items[0].kind === 'file') {
                const file = event.dataTransfer.items[0].getAsFile();
                setSelectedFile(file);
                setPreview(URL.createObjectURL(file));
            }
        }
    };

    return (
        <div className="upload-container">
            <div className="upload-box" onDragOver={handleDragOver} onDrop={handleDrop}>
                {!preview && (
                    <>
                        <div className="upload-icon"></div>
                        <p>Select a file or drag here</p>
                        <input type="file" id="file" className="input-file" onChange={handleFileChange} />
                        <label htmlFor="file" className="select-button">PLEASE SELECT AN IMAGE</label>
                    </>
                )}
                {preview && <img src={preview} alt="Preview" className="preview-image" />}
            </div>
            <button className="submit-button" onClick={handleFileUpload}>SUBMIT</button>
            {prediction && (
            <div className="prediction-bars">
                <div className="dog-bar" style={{ width: `${prediction.Dog * 100}%` }}>
                    Dog: {(prediction.Dog * 100).toFixed(2)}%
            </div>
                <div className="cat-bar" style={{ width: `${prediction.Cat * 100}%` }}>
                Cat: {(prediction.Cat * 100).toFixed(2)}%
        </div>
    </div>
            )}
        </div>
    );
};

export default FileUpload;
