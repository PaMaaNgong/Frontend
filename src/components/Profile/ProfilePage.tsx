import clsx from "clsx";
import React from "react";
import PopupBTN from "../Reviews/PopupBTN";
import LoadingBar from "./LoadingBar"; // Assuming you put the LoadingBar component in a separate file
import ArticleCard from "../Homepage/ArticleCard";

interface Props {
  majorElectiveProgress: number;
  totalMajorElectives: number;
}

const ProfilePage: React.FC<Props> = ({
  majorElectiveProgress,
  totalMajorElectives,
}) => {
  return (
    <div className="bg-[#F5EBE0]/40 min-h-screen">
      {/* Navigation */}
      <nav
        className={clsx(
          "flex justify-between px-8 items-center py-3 font-['kanit'] bg-[#9B2226]"
        )}
      >
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* Logo */}
            <a href="/" className="text-3xl font-mono text-white">
              FreeCPE
            </a>
          </section>
        </div>

        {/* Last section */}
        <section className="flex items-center gap-3">
          {/* Review */}
          <PopupBTN courseNo={""} courseName={""} />
          {/* Profile icon link */}
          <a href="/profile/userId" className="text-3xl">
            <img
              src="/icon/image 4.png"
              alt="Profile Icon"
              className="w-15 h-8"
            />
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
                <div>Major Elective:</div>
                <div className="flex items-center gap-4 ">
                  <LoadingBar currentProgress={2} total={4} />
                </div>
                <div>General Education Elective:</div>
                <div className="flex items-center gap-4">
                  <LoadingBar
                    currentProgress={1}
                    total={1}
                    color="bg-yellow-300"
                  />
                </div>
                <div>Free Elective:</div>
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
            <div className="border-b border-gray-300 mb-4">
              <h2 className="mb-4">วิชาที่ยังไม่ได้รีวิว</h2>
              <ArticleCard
                course={{
                  id: "000001",
                  name_th: "",
                  name_en: "kuy SE hee mak",
                  type: "ge",
                  total_reviews: 100,
                }}
              />
            </div>

            <div className="reviewed-courses">
              <h2>วิชาที่เคยรีวิวไปแล้ว</h2>
              {/* List of reviewed courses */}
              <ArticleCard
                course={{
                  id: "123",
                  name_th: "",
                  name_en: "",
                  type: "ge",
                  total_reviews: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
