import React, { useState } from 'react';

export type RatingDetail = {
    stars?: number;
    count: number;
    percentage: number;
    grade?: string;
};

type HistogramProps = {
    ratings: RatingDetail[];
};

const RatingsHistogram: React.FC<HistogramProps> = ({ ratings }) => {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);

    const maxCount = Math.max(...ratings.map((r: RatingDetail) => r.count));

    return (
        <>
            <div className="mt-2 text-sm grid-cols-2 col-start-1 col-end-2 bg-[#fff] justify-center  rounded-xl p-3 shadow">
                {ratings.map((rating, index) => (
                    <div key={index} className="flex" onMouseEnter={() => setHoveredBar(index)} onMouseLeave={() => setHoveredBar(null)}>
                        <div className="flex justify-end w-20">
                            <div className="justify-end flex mb-2 col-span-1">
                                {Array.from({ length: 5 - index }).map((_, starIndex) => (
                                    <span key={starIndex} className="histogram-star">
                                    ★
                                </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex w-1/2 ml-2 h-5">
                            <div className=""
                                 style={{
                                     width: `${(rating.count / maxCount) * 100}%`,
                                     height: '20px',
                                     backgroundColor: hoveredBar === index ? '#0077b6' : '#005A8C', // Change color on hover
                                     display: 'flex',
                                     alignItems: 'center',
                                     // justifyContent: 'flex-end',
                                     // fontSize: '12px',
                                     // transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                                 }}
                            >
                            </div>
                            <div className="ml-1">
                                {/*{rating.count} ★{rating.stars}*/}
                                {/*    <br />*/}
                                {rating.percentage.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RatingsHistogram;