// RatingsHistogram.tsx
import React from 'react';
import './RatingsHistogram.css'; // make sure to create a corresponding CSS file

type HistogramBar = {
    value: number;
    height: number;
};

const RatingsHistogram: React.FC = () => {
    // Example data for histogram bars
    const bars: HistogramBar[] = [
        { value: 1, height: 80 },
        { value: 2, height: 20 },
        { value: 3, height: 30 },
        { value: 4, height: 50 },
        { value: 5, height: 70 },
        // ...add more bars as needed
    ];

    return (
        <div className="ratings-container">
            <div className="ratings-header">
                <span>RATINGS</span>
            </div>
            <div className="histogram">
                <span>⭐</span>
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="histogram-bar"
                        style={{ height: `${bar.height}%` }}
                    >
                        {/* The number inside the bar */}
                        <span>{bar.value}</span>
                    </div>
                ))}
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="ratings-footer">
                {/*<span className="rating-value">4.2</span>*/}
                <span className="rating-stars">
          {/* You can use a package or custom SVG for stars */}


        </span>
            </div>
        </div>
    );
};

export default RatingsHistogram;
