const PredictionBars = ({ prediction }) => {
    return (
        prediction && (
            <div className="prediction-bars">
                <div className="dog-bar" style={{ width: `${prediction.Dog * 100}%` }}>
                    Dog: {(prediction.Dog * 100).toFixed(2)}%
                </div>
                <div className="cat-bar" style={{ width: `${prediction.Cat * 100}%` }}>
                    Cat: {(prediction.Cat * 100).toFixed(2)}%
                </div>
            </div>
        )
    );
};
export default PredictionBars;