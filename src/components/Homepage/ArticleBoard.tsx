import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleBoard: React.FC = () => {
  // กำหนด array ของ URLs สำหรับรูปภาพ
  const imageUrls = [
    'src/components/Homepage/Card/image 18.png',
'src/components/Homepage/Card/image 19.png',
'src/components/Homepage/Card/image 20.png',
'src/components/Homepage/Card/image 21.png',
'src/components/Homepage/Card/image 22.png',
'src/components/Homepage/Card/image 23.png',
'src/components/Homepage/Card/image 24.png',
'src/components/Homepage/Card/image 25.png'
  ];

  // สร้าง function เพื่อเลือกรูปภาพแบบสุ่ม
  const getRandomImageUrl = () => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  };

  const getIconUrl = (type: string) => {
    switch (type) {
      case 'me':
        return 'src/components/Homepage/icon/image 29.png';
      case 'ge':
        return 'src/components/Homepage/icon/image 28.png';
      case 'fr':
        return 'src/components/Homepage/icon/image 27.png';
      default:
        return ''; // หรือค่าเริ่มต้นหากไม่ตรงกับใดๆ
    }
  };

  // ข้อมูลตัวอย่าง, สามารถแทนที่ด้วยข้อมูลจริง
  const articles = [
    {
      imageUrl: getRandomImageUrl(),
      id: '261200',
      name_en: 'Object-Oriented Programming',
      type: "fr", // ตัวอย่างของ type
    },
    {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      },
      {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      },
      {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      },
      {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      },
      {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      },
      {
        imageUrl: getRandomImageUrl(),
        id: '261678',
        name_en: 'dfghjkl',
        type: "ge", // ตัวอย่างของ type
      }
    // ... ข้อมูลของบทความอื่นๆ
  ].map(article => ({ ...article, iconUrl: getIconUrl(article.type) })); // แมปและเพิ่ม iconUrl

  return (
    <div className="overflow-auto max-h-[500px]">
   <div className="container my-12 mx-auto px-8 md:px-12 w-full">
      {/* Container ภายนอกสำหรับ scrollbar */}
        {/* Container ภายในสำหรับ cards */}
        <div className="flex flex-wrap -mx-1 lg:-mx-4 font-['kanit']">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              imageUrl={article.imageUrl}
              courseCode={article.id}
              courseName={article.name_en}
              iconUrl={article.iconUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBoard;
