import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Homepage/Navbar";
import { ICourse } from "./props";
import { fetchCourseData } from "./api";
import clsx from "clsx";
import profileIcon from "../Homepage/icon/image 4.png";
import PopupBTN from "../Reviews/PopupBTN";
import { GradeHistogramChart } from "./DataVisualize/Grade/GradeHistogramChart";
import RatingsHistogram from "./DataVisualize/Rating/RatingHistogram";

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};
const labels = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
const data: ChartData = {
  labels,
  datasets: [
    {
      label: "Grade",
      data: [29, 37, 42, 27, 29, 18, 8],
      backgroundColor: "rgb(30,140,208)",
    },
  ],
};

const exampleRatings: RatingDetail[] = [
  { stars: 1, count: 150, percentage: 5 },
  { stars: 1.5, count: 78, percentage: 2.5 },
  { stars: 2, count: 200, percentage: 7 },
  { stars: 2.5, count: 175, percentage: 6 },
  { stars: 3, count: 400, percentage: 13 },
  { stars: 3.5, count: 600, percentage: 20 },
  { stars: 4, count: 900, percentage: 30 },
  { stars: 4.5, count: 450, percentage: 15 },
  { stars: 5, count: 147, percentage: 1.5 },
];

const formatSchedule = (schedule: {
  days: any[];
  start_hour: any;
  start_minute: any;
  end_hour: any;
  end_minute: any;
}) => {
  if (schedule && typeof schedule === "object") {
    const pad = (num: { toString: () => string }) =>
      num.toString().padStart(2, "0");

    return (
      <div>
        <p>Day: {schedule.days.join(" and ")}</p>
        <p>
          Time:{" "}
          {`${pad(schedule.start_hour)}.${pad(schedule.start_minute)} - ${pad(
            schedule.end_hour
          )}.${pad(schedule.end_minute)}`}
        </p>
      </div>
    );
  } else {
    return <div>Invalid schedule format</div>;
  }
};

const CoursePreview: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseData, setCourseData] = useState<any>(null);
  const [buttonType, setButtonType] = useState<string>("lecturers");

  useEffect(() => {
    if (courseId) {
      fetchCourseData(courseId)
        .then((data) => setCourseData(data))
        .catch((error) => console.error(error));
    }
  }, [courseId]);

  const handleButtonClick = (type: string) => {
    setButtonType(type);
  };

  if (!courseData) {
    // Loading state

    return <div> Loading... </div>;
  }
  // console.log(courseData.rooms);
  return (
    <div className="bg-black ">
      {/* Navbar */}

      <nav
        className={clsx(
          "flex justify-between px-8 items-center py-3 font-['kanit'] bg-[#9B2226]"
        )}
      >
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <a href="/" className="text-3xl font-mono text-white">
              FreeCPE
            </a>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-3">
          {/* Review */}
          <PopupBTN courseNo={courseData.id} courseName={courseData.name_en} />
          {/* Profile icon link */}
          <a href="/profile" className="text-3xl">
            <img src={profileIcon} alt="Profile Icon" className="w-15 h-8" />
          </a>
        </section>
      </nav>

      <div className="grid grid-cols-2 bg-[#fff4f4] text-2xl p-16 gap-8 h-full">
        {/* course detail section */}
        <div className=" ">
          {/* course No */}
          <div className="mb-4  ">
            {/* <span className="font-bold text-5xl">{courseData.id}</span> */}
            <span className="font-bold text-5xl">{courseData.id}</span>

            <span className="inline-block">
              {courseData.type === "me" && (
                <img
                  alt="Icon"
                  src="../src/components/Homepage/icon/image%2030.png"
                  className="ml-4 w-15 h-9"
                />
              )}
              {courseData.type === "fe" && (
                <img
                  alt="Icon"
                  src="../src/components/Homepage/icon/image%2027.png"
                  className="ml-4 w-15 h-9"
                />
              )}
              {courseData.type === "ge" && (
                <img
                  alt="Icon"
                  src="../src/components/Homepage/icon/image%2028.png"
                  className="ml-4 w-15 h-9"
                />
              )}
            </span>
          </div>

          {/* Name */}
          <div className="font-bold text-4xl my-4">
            {courseData.name_en} - {courseData.name_th}
          </div>
          {/* description */}
          <div className="text-xl my-4">{courseData.description}</div>
          <div className="font-bold text-4xl my-4">
            <RatingsHistogram ratings={exampleRatings} />
            {/* <p className="font-normal my-4 text-sm">wait for api</p> */}
            {/* <GradeHistogramChart
              options={options}
              data={data}
              title={"Preview"}
            /> */}
          </div>
          <div className="grid grid-flow-col-dense my-12">
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => handleButtonClick("lecturers")}
            >
              Lecturer
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => handleButtonClick("location")}
            >
              Location
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => handleButtonClick("schedule")}
            >
              Schedule
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => handleButtonClick("room")}
            >
              Room
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => handleButtonClick("grade")}
            >
              Grade
            </button>
          </div>
          <div className="text-xl">
            {courseData ? (
              <div>
                {buttonType === "lecturers" && (
                  <div>Lecturer: {courseData.lecturers}</div>
                )}
                {buttonType === "location" && (
                  <div>Location: {courseData.location}</div>
                )}
                {buttonType === "schedule" && (
                  <div>Schedule: {formatSchedule(courseData.schedule)}</div>
                )}
                {buttonType === "room" && <div>Room: {courseData.rooms}</div>}
                {buttonType === "grade" && (
                  <GradeHistogramChart
                    options={options}
                    data={data}
                    title={"Grade Preview"}
                  />
                )}
                {/* ... (render other data based on buttonType) ... */}
              </div>
            ) : (
              "error"
            )}
          </div>
        </div>
        {/* review section */}
        <div className=" ">
          <div>Review</div>
          <div className="rounded-3xl bg-white p-4 text-xl h-screen">
            fetch data from DB
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
