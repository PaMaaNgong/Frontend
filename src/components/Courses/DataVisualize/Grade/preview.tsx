import {GradeHistogramChart} from './GradeHistogramChart';
import {ChartData, ChartOptions} from "chart.js";

export default function GradeHistogramPreview() {
    const options: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true
            },
        }
    }
    const labels = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D','F'];
    const data: ChartData = {
        labels,
        datasets: [
            {
                label: 'Grade',
                data: [29, 37, 42, 27, 29, 18, 8],
                backgroundColor: 'rgb(30,140,208)',
            }
        ]
    }

    return <GradeHistogramChart options={options} data={data} title={"Preview"}/>
}