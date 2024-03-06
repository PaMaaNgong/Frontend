import {GradeHistogramChart} from './GradeHistogramChart';
import {ChartData, ChartOptions, ChartTypeRegistry} from "chart.js";

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
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data: ChartData<'bar', number[]> = {
        labels,
        datasets: [
            {
                label: 'Rating',
                data: [9, 3, 2, 7, 9, 11, 13],
                backgroundColor: 'rgb(30,140,208)',
            }
        ]
    }

    return <GradeHistogramChart options={options} data={data} title={"Preview"}/>
}