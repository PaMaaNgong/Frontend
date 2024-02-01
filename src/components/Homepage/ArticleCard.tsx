import React from "react";
import { CourseOverview, CourseType } from "../../models";
import { Link } from "react-router-dom";

type ArticleCardProps = {
  course: CourseOverview;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ course }) => {
  // ฟังก์ชันเพื่อตัดและเติม "..."
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const imageUrls = [
    "src/components/Homepage/Card/image 18.png",
    "src/components/Homepage/Card/image 19.png",
    "src/components/Homepage/Card/image 20.png",
    "src/components/Homepage/Card/image 21.png",
    "src/components/Homepage/Card/image 22.png",
    "src/components/Homepage/Card/image 23.png",
    "src/components/Homepage/Card/image 24.png",
    "src/components/Homepage/Card/image 25.png",
  ];

  const getRandomImageUrl = () => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  };
  
  const mapIconUrl = (type: CourseType) => {
    switch (type) {
      case "me":
        return "src/components/Homepage/icon/image 30.png";
      case "ge":
        return "src/components/Homepage/icon/image 28.png";
      case "fe":
        return "src/components/Homepage/icon/image 27.png";
    }
  };

  return (
    <div className="mt-1 px-1 w-1/5 md:w-1/5 lg:mt-4 lg:px-4 lg:mb-4 lg:w-1/5 relative">
      {/* ย้าย hover:shadow-lg และ transition-shadow ไปยัง article */}
      <Link
        to={`/courses/${course.id}`}
        className="block overflow-hidden rounded-lg"
      >
        <article className="overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
          <a href="#" className="block overflow-hidden rounded-lg">
            <img
              alt="Placeholder"
              className="block h-auto w-full object-cover mb-0"
              src={getRandomImageUrl()}
            />
            <div className="p-1 md:p-4 mt-o">
              <header className="mt-0 mb-0 pl-0">
                <h1 className="mb-0 text-lg">{course.id}</h1>
              </header>
              <footer className="mt-0">
                {truncateString(course.name_en, 20)}
              </footer>
            </div>
            <img
              alt="Icon"
              src={mapIconUrl(course.type)}
              className="absolute bottom-0 right-0 mb-4 mr-8 w-15 h-6"
            />
          </a>
        </article>
      </Link>
    </div>
  );
};

export default ArticleCard;
