import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PopupBTN from "../Reviews/PopupBTN";
import LoadingBar from "./LoadingBar";
import logo from "../Homepage/icon/logo.png";
import profileIcon from "../Homepage/icon/image 4.png";
import reviewIcon from "../Homepage/icon/image 26.png";
import ArticleCard from "../Homepage/ArticleCard";
import CardProfile from "./cardProfile";
import { CourseOverview } from "../../models";
import ReviewEditBTN from "../Reviews/ReviewEditBTN";
import ReviewDeleteBTN from "../Reviews/ReviewDeleteBTN";

interface Props {
  majorElectiveProgress: number;
  totalMajorElectives: number;
}

const ProfilePage: React.FC<Props> = ({
  majorElectiveProgress,
  totalMajorElectives,
}) => {
  const [reviewedCourses, setReviewedCourses] = useState<CourseOverview[]>([]);

  useEffect(() => {
    const fetchReviewedCourses = async () => {
      try {
        const accessToken = "token-1"; // Replace with actual access token

        const response = await fetch(
          "https://whale-app-3xvcg.ondigitalocean.app/v1/profile/reviews/courses",
          {
            headers: {
              accept: "application/json",
              accessToken: accessToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviewed courses");
        }

        const data = await response.json();
        setReviewedCourses(data); // Assuming the response is an array of courses
      } catch (error) {
        console.error("Error fetching reviewed courses:", error);
      }
    };

    fetchReviewedCourses();
  }, []);

  return (
    <div className="bg-[#F5EBE0]/40 min-h-screen">
      {/* Navigation */}
      <nav
        className={clsx(
          "flex justify-between px-9 items-center py-3 font-['kanit'] font-normal bg-[#9B2226] h-14"
        )}
      >
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            <a href="/" className="text-3xl font-mono text-white">
              <img src={logo} alt="Logo" className="w-auto h-12" />
            </a>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-3">
          {/* Review icon link */}
          <a href="/review" className="text-3xl">
            <img src={reviewIcon} alt="Review Icon" className="w-25 h-8" />
          </a>
          {/* Profile icon link */}
          <a href="/profile/userId" className="text-3xl">
            <img src={profileIcon} alt="Profile Icon" className="w-15 h-8" />
          </a>
        </section>
      </nav>

      {/* Profile content */}
      <div className="flex p-12">
        <div className="w-1/4">
          <div className="bg-white p-4 rounded-lg text-2xl text-center">
            <p>ชื่อ ปราชญ์ชยา กรณิศทิศารัศม์</p>
            <p>รหัสนักศึกษา 640610649</p>
            {/* Place the LoadingBar here */}
            <div className="mt-8">
              <div className="flex flex-col gap-4 text-left">
                <div>Major Elective</div>
                <div className="flex items-center gap-4 ">
                  <LoadingBar currentProgress={2} total={4} />
                </div>
                <div>General Education</div>
                <div className="flex items-center gap-4">
                  <LoadingBar
                    currentProgress={1}
                    total={1}
                    color="bg-yellow-300"
                  />
                </div>
                <div>Free Elective</div>
                <div className="flex items-center gap-4">
                  <LoadingBar
                    currentProgress={4}
                    total={5}
                    color="bg-green-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 ml-12">
  <div className="bg-bg-[#F5EBE0]/40 p-4 rounded-lg text-4xl h-autp">
    <div className="mb-4 border-b">วิชาที่เคยรีวิวไปแล้ว</div>
    <div className="flex flex-wrap border-b border-gray-300 mb-4 text-sm">
      {reviewedCourses.map((course) => (
        <CardProfile key={course.id} course={course}>
          <div className="flex justify-between gap-1">
            {/* {uniqueReviewId} */}
            <ReviewEditBTN
              courseNo={course.id}
              courseName={course.name_th}
              reviewId={"uniqueReviewId"} // This should be dynamically obtained
              accessToken={"token-1"}
            />
            <ReviewDeleteBTN
              courseNo={course.id}
              courseName={course.name_th}
              reviewId={"13"} // This should also be dynamically obtained
              accessToken={"token-1"}
            />
          </div>
          
        </CardProfile>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProfilePage;
