import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import "./GradeHistogram.css";

interface IGradeHistogramChart {
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

export const GradeHistogramChart: React.FC<IGradeHistogramChart> = ({
  data,
  options,
  title,
}) => {
  return (
    <div className="GradesHistogram">
      <Bar options={options} data={data} title={title} />
    </div>
  );
};
