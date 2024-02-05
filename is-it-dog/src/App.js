import './App.css';

import React, { useState } from 'react';
import FileUpload from './FileUpload';
import PredictionBars from './PredictionBars';

const App = () => {
  const [prediction, setPrediction] = useState(null);

  return (
      <div className='App'>
          <h1>Is It Dog??</h1>
          <div className="flex-container" style={{display:'flex'}}>
              <FileUpload setPrediction={setPrediction}/>
              <PredictionBars prediction={prediction}/>
          </div>
      </div>
  );
};


export default App;

