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

<<<<<<< HEAD
=======
  const imageUrls = [
    "/card/image 18.png",
    "/card/image 19.png",
    "/card/image 20.png",
    "/card/image 21.png",
    "/card/image 22.png",
    "/card/image 23.png",
    "/card/image 24.png",
    "/card/image 25.png",
  ];
>>>>>>> f544873c503291a758b6d41ce9754b43ab4d7e91

  const getImageUrlByType = (type: CourseType) => {
    switch (type) {
      case "fe":
        return "src/components/Homepage/Card/image 27.png";
      case "me":
        return "src/components/Homepage/Card/image 28.png";
      case "ge":
        return "src/components/Homepage/Card/image 29.png";
      default:
        return ""; // Consider adding a default image URL here
    }
  };
  
  const mapIconUrl = (type: CourseType) => {
    switch (type) {
      case "me":
        return "/icon/image 30.png";
      case "ge":
        return "/icon/image 28.png";
      case "fe":
        return "/icon/image 27.png";
    }
  };

  return (
    <div className="mt-1 px-1 w-1/5 md:w-1/5 lg:mt-4 lg:px-4 lg:mb-4 lg:w-1/5 relative">
    {/* ย้าย hover:shadow-lg และ transition-shadow ไปยัง article */}
    <Link
      to={`/courses/${course.id}`}
      className="block overflow-hidden rounded-lg shadow"
    >
      <article className="overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <a href="#" className="block overflow-hidden rounded-lg">
          <img
            alt="Placeholder"
            className="block h-auto w-full object-cover mb-1"
            src={getImageUrlByType(course.type)}
          />
          <div className="p-1 md:p-4 pt-0 pb-0">
            <header className="mt-0 mb-0 pl-0">
              <h1 className="text-lg">{course.id}</h1>
            </header>
            <footer className="mt-0 mb-0"> 
              {truncateString(course.name_en, 17)}
            </footer>
          </div>
          <div className="absolute bottom-0 right-0 mb-4 mr-8 text-right">
            <div className="text-lg font-bold text-black">{course.rating} <span className="text-blue-600">*</span></div>
            <div className="text-sm text-blue-600">{course.total_reviews} reviews</div>
          </div>
          {/* <img
            alt="Icon"
            src={mapIconUrl(course.type)}
            className="absolute bottom-0 right-0 mb-4 mr-8 w-15 h-6"
          /> */}
        </a>
      </article>
      </Link>
    </div>
  );
};

export default ArticleCard;
