import React, {useEffect, useRef} from "react";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from "chart.js";
import "./GradeHistogram.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     backgroundColor: string;
//   }[];
// }

const GradeHistogramChart: React.FC<{ data: ChartData<'bar'>, options: ChartOptions, title?: string }> = ({
                                                                                                              data,
                                                                                                              options,
                                                                                                              title,
                                                                                                          }) => {
    return (
        <div className="mt-1 bg-[#fff] justify-center  rounded-xl p-3 shadow">
            <Bar data={data} title={title}/>
        </div>
    );
};

export default GradeHistogramChart;