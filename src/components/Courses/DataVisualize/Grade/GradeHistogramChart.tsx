import React from "react";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ChartOptions,
} from 'chart.js';
import './GradeHistogram.css';
import {Grade} from "../../../../models";
import {getGrades} from "../../../../repositories/Course";

type Props = {
    grades: Grade[],
    data: ChartData;
    options: ChartOptions;
    title: string;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
}

export const GradeHistogramChart: React.FC<Props> = ({data, options, title}) => {
    const [grades, setGrades] = React.useState<Grade[]>([]);
    React.useEffect(() => {
        getGrades("261200").then(response => {
            setGrades(response.data)
            console.log(response.data)
        })
    },[])
    return (
        <div className="GradesHistogram">
            <Bar options={options} data={data} title={title}/>;
        </div>
    );

};
