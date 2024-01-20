import React from 'react';

interface ArticleCardProps {
  imageUrl: string;
  courseCode: string;
  courseName: string;
  iconUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, courseCode, courseName, iconUrl }) => {
  // ฟังก์ชันเพื่อตัดและเติม "..."
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    }
    return str;
  };

  return (
    <div className="mt-1 px-1 w-1/5 md:w-1/5 lg:mt-4 lg:px-4 lg:mb-4 lg:w-1/5 relative"> 
      {/* ย้าย hover:shadow-lg และ transition-shadow ไปยัง article */}
      <article className="overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <a href="#" className="block overflow-hidden rounded-lg">
          <img alt="Placeholder" className="block h-auto w-full object-cover mb-0" src={imageUrl} />
          <div className="p-1 md:p-4 mt-o">
            <header className="mt-0 mb-0 pl-0">
              <h1 className="mb-0 text-lg">{courseCode}</h1>
            </header>
            <footer className="mt-0">
              {truncateString(courseName, 15)}
            </footer>
          </div>
          <img alt="Icon" src={iconUrl} className="absolute bottom-0 right-0 mb-4 mr-8 w-15 h-6" />
        </a>
      </article>
    </div>
  );
};


export default ArticleCard;
