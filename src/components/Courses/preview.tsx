import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../Homepage/Navbar";
import {ICourse} from "./props";
import {fetchCourseData} from "./api";
import clsx from "clsx";
import PopupBTN from "../Reviews/PopupBTN";
import GradeHistogramChart from "./DataVisualize/Grade/GradeHistogramChart"
import CommentEach from "./CommentEach";
import {ChartData, ChartOptions} from "chart.js";
import RatingsHistogram, {RatingDetail} from "./DataVisualize/Rating/RatingHistogram";
import RatingChart from "./DataVisualize/Rating/RatingChart";
import {getRating} from "../../repositories/Course";

const profileIcon = "/icon/image 4.png";
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


const CoursePreview: React.FC = () => {
    const {courseId} = useParams<{ courseId: string }>();
    const [courseData, setCourseData] = useState<any>(null);
    const [buttonType, setButtonType] = useState<string>("lecturers");
    const [courseRating, setCourseRating] = useState<RatingDetail[]>([]);
    const [ratingCounts, setRatingCounts] = useState<number[]>([0, 0, 0, 0, 0]);
    const [totalRatingCount, setTotalRatingCount] = useState<number>(0);
    const [gradeCounts, setGradeCounts] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        if (courseId) {
            fetchCourseData(courseId)
                .then((data) => setCourseData(data))
                .catch((error) => console.error(error));
            getRating(courseId)
                .then((response) => {
                    const data: RatingDetail[] = response.data;
                    setCourseRating(data);

                    // Count ratings
                    let totalCount = 0;
                    const counts = [0, 0, 0, 0, 0]; // Initialize counts for each rating score
                    data.forEach((rating) => {
                        if (rating.rating && rating.rating >= 1 && rating.rating <= 5) {
                            counts[rating.rating - 1]++; // Increment the count for the corresponding rating score
                            totalCount++; // Increment total count
                        }
                    });


                    // const ratingsForCourse = data.filter((rating) => rating.courseId === courseId);
                    console.log(data);
                    // Count grades for the filtered ratings
                    const counts_grade = [0, 0, 0, 0, 0, 0, 0, 0]; // Initialize counts for each grade score
                    data.forEach((rating) => {
                        switch (rating.grade) {
                            case 'A':
                                counts_grade[0]++;
                                break;
                            case 'B+':
                                counts_grade[1]++;
                                break;
                            case 'B':
                                counts_grade[2]++;
                                break;
                            case 'C+':
                                counts_grade[3]++;
                                break;
                            case 'C':
                                counts_grade[4]++;
                                break;
                            case 'D+':
                                counts_grade[5]++;
                                break;
                            case 'D':
                                counts_grade[6]++;
                                break;
                            case 'F':
                                counts_grade[7]++;
                                break;
                            default:
                                break;
                        }
                    });

                    setRatingCounts(counts); // Update the state with the counts
                    setTotalRatingCount(totalCount);
                    setGradeCounts(counts_grade);
                })
                .catch((error) => console.error(error));
        }
    }, [courseId]);

    const exampleRatings: RatingDetail[] = [
        {stars: 1, count: ratingCounts[4], percentage: (ratingCounts[4] / totalRatingCount) * 100},
        {stars: 2, count: ratingCounts[3], percentage: (ratingCounts[3] / totalRatingCount) * 100},
        {stars: 3, count: ratingCounts[2], percentage: (ratingCounts[2] / totalRatingCount) * 100},
        {stars: 4, count: ratingCounts[1], percentage: (ratingCounts[1] / totalRatingCount) * 100},
        {stars: 5, count: ratingCounts[0], percentage: (ratingCounts[0] / totalRatingCount) * 100},
    ];

    const labels = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
    const data: ChartData<'bar'> = {
        labels,
        datasets: [
            {
                label: "Grade",
                data: [gradeCounts[0], gradeCounts[1], gradeCounts[2], gradeCounts[3], gradeCounts[4], gradeCounts[5], gradeCounts[6]],
                backgroundColor: "rgb(30,140,208)",
            },
        ],
    };
    const handleButtonClick = (type: string) => {
        setButtonType(type);
    };

    if (!courseData) {
        // Loading state
        return <div> Loading... </div>;
    }

    console.log(courseId)
    console.log("count" + gradeCounts[0])
    return (
        <div className="bg-[#F5EBE0]/40 h-lvh">
            {/* Navbar */}

            <nav
                className={clsx(
                    "flex justify-between px-9 items-center py-3 font-['kanit'] bg-[#9B2226]"
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
                    <PopupBTN courseNo={courseData.id} courseName={courseData.name_en}/>
                    {/* Profile icon link */}
                    <a href="/profile" className="text-3xl">
                        <img src={profileIcon} alt="Profile Icon" className="w-15 h-8"/>
                    </a>
                </section>
            </nav>
            {/*content*/}
            <div className="grid grid-cols-4 text-2xl gap-3 pt-5 px-9">
                {/* course detail section */}
                <div className="h-min col-span-1">
                    {/* course No */}
                    <div className="mb-4">
                        {/* <span className="font-bold text-5xl">{courseData.id}</span> */}
                        <span className="font-bold text-5xl">{courseData.id}</span>

                        <span className="inline-block">
              {courseData.type === "me" && (
                  <img
                      alt="Icon"
                      src="/icon/image 30.png"
                      className="ml-4 w-15 h-9"
                  />
              )}
                            {courseData.type === "fe" && (
                                <img
                                    alt="Icon"
                                    src="/icon/image 27.png"
                                    className="ml-4 w-15 h-9"
                                />
                            )}
                            {courseData.type === "ge" && (
                                <img
                                    alt="Icon"
                                    src="/icon/image 28.png"
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
                    <div className="grid grid-flow-col-dense my-12">
                        <button
                            className=" rounded-full hover:bg-sky-200"
                            onClick={() => handleButtonClick("lecturers")}
                        >
                            Lecturer
                        </button>
                        <button
                            className=" rounded-full hover:bg-sky-200"
                            onClick={() => handleButtonClick("grade")}
                        >
                            Grade
                        </button>
                    </div>
                    <div className="text-xl -mt-8">
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
                                {buttonType === "room" && (
                                    <div>
                                        Room:{" "}
                                        {courseData.rooms.length > 1
                                            ? courseData.rooms.join(", ")
                                            : courseData.rooms[0]}
                                    </div>
                                )}
                                {/*{buttonType === "grade" && (*/}
                                {/*  <GradeHistogramChart*/}
                                {/*    options={options}*/}
                                {/*    data={data}*/}
                                {/*    title={"Grade Preview"}*/}
                                {/*  />*/}
                                {/*)}*/}
                                {/* ... (render other data based on buttonType) ... */}
                            </div>
                        ) : (
                            "error"
                        )}
                    </div>
                </div>
                {/*Graph section*/}
                <div className="h-min col-span-1 items-center">
                    <div className="text-lg">
                        <div className="text-[22px] font-semibold">Rating</div>
                        <hr className="h-0.5 mx-auto bg-black"/>
                        <RatingsHistogram ratings={exampleRatings}/>
                    </div>
                    <div className="mt-2">
                        <div className="text-[22px] font-semibold">Grade</div>
                        <hr className="h-0.5 mx-auto bg-black"/>
                        <GradeHistogramChart options={options} data={data}/>
                    </div>
                </div>
                {/*review section*/}
                <div className="h-2/4 col-span-2">
                    <div>Review</div>
                    <div className="rounded-3xl bg-white p-4 text-xl overflow-y-auto overflow-hidden h-[28em]">
                        <CommentEach/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;