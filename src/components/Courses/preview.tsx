import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Homepage/Navbar";
import { ICourse } from "./props";
import { fetchCourseData } from "./api";
import clsx from "clsx";
import profileIcon from "../Homepage/icon/image 4.png";
import PopupBTN from "../Reviews/PopupBTN";

const CoursePreview: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseData, setCourseData] = useState<any>(null);
  const [buttonData, setButtonData] = useState<any>("");

  useEffect(() => {
    if (courseId) {
      fetchCourseData(courseId)
        .then((data) => setCourseData(data))
        .catch((error) => console.error(error));
    }
  }, [courseId]);

  console.log("ID is " + courseId);
  console.log("courseData " + courseData);

  if (!courseData) {
    // Loading state
    return <div> Loading... </div>;
  }

  return (
    <div className="bg-black h-screen">
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
              <img
                alt="Icon"
                src="../src/components/Homepage/icon/image%2015.png"
                className="ml-4 w-15 h-9"
              />
            </span>
          </div>

          {/* Name */}
          <div className="font-bold text-4xl my-4">
            {courseData.name_en} - {courseData.name_th}
          </div>
          {/* description */}
          <div className="text-xl my-4">{courseData.description}</div>
          <div className="font-bold text-4xl my-4">
            Grade Visualize
            <p className="font-normal my-4 text-sm">wait for api</p>
          </div>
          <div className="grid grid-flow-col-dense my-4">
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => setButtonData("Lecturer: " + courseData.lecturers)}
            >
              Lecturer
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => setButtonData("Location: " + courseData.location)}
            >
              Location
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => setButtonData("Schedule: " + courseData.schedule)}
            >
              Schedule
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => setButtonData("Room: " + courseData.rooms)}
            >
              Room
            </button>
            <button
              className=" rounded-full hover:bg-sky-200"
              onClick={() => setButtonData("Grade: " + courseData.rooms)}
            >
              Grade
            </button>
          </div>
          <div className="text-xl">
            {courseData ? (
              <div>
                <p>{buttonData}</p>
              </div>
            ) : (
              "error"
            )}
          </div>
        </div>
        {/* review section */}
        <div className="">
          <div>Review</div>
          <div className="rounded-3xl bg-white p-4 text-xl h-full">
            fetch data from DB
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
