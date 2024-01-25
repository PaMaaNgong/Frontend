// import React, { useEffect, useState } from "react";
// import Navbar from "../Homepage/Navbar";
// import { ICourse } from "./props";
// import { fetchCourseData } from "./api";

// export function Course(props: ICourse) {
//   // const [courseData, setCourseData] = useState<any>(null);
//   // useEffect(() => {
//   //   const courseId = props.match.params.courseId; // Assuming you are using React Router and course ID is part of the URL
//   //   fetchCourseData(courseId)
//   //     .then((data) => setCourseData(data))
//   //     .catch((error) => console.error(error));
//   // }, [props.match.params.courseId]);

//   // if (!courseData) {
//   //   // Loading state
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div className="bg-black h-screen">
//       <Navbar />
//       console.log()
//       <div className="grid grid-cols-2 bg-[#fff4f4] text-2xl p-16 gap-8 h-full">
//         {/* course detail section */}
//         <div className=" ">
//           {/* course No */}
//           <div className="mb-4  ">
//             {/* <span className="font-bold text-5xl">{courseData.id}</span> */}
//             <span className="font-bold text-5xl">261200</span>

//             <span className="inline-block">
//               <img
//                 alt="Icon"
//                 src="../src/components/Homepage/icon/image%2015.png"
//                 className="ml-4 w-15 h-9"
//               />
//             </span>
//           </div>

//           {/* Name */}
//           <div className="font-bold text-4xl my-4">
//             The Life Long - ชีวิตยืดยาว
//           </div>
//           {/* description */}
//           <div className="text-xl my-4">
//             การศึกษาเกี่ยวกับธรรมชาติและสิ่งแวดล้อมโดยตรงมีความหลากหลายและลึกซึ้งมากมาย
//             นอกจากภูมิอากาศ, นิวเคลียร์, การจัดการทรัพ
//             ยากรธรรมชาติ,และการป้องกันมลพิษที่เป็นส่วนสำคัญแล้วยังมีหลายหัวข้ออื่นที่เกี่ยวข้อง
//             เช่น การประเมินผลกระทบสิ่งแวดล้อม
//           </div>
//           <div className="font-bold text-4xl my-4">
//             Grade Visualize
//             <p className="font-normal my-4 text-sm">wait for api</p>
//           </div>
//           <div className="grid grid-flow-col-dense my-4">
//             <button className=" rounded-full hover:bg-sky-200">Lecturer</button>
//             <button className=" rounded-full hover:bg-sky-200">Location</button>
//             <button className=" rounded-full hover:bg-sky-200">Schedule</button>
//             <button className=" rounded-full hover:bg-sky-200">Room</button>
//           </div>
//           <div className="text-sm">wait for api</div>
//         </div>
//         {/* review section */}
//         <div className="">
//           <div>Review</div>
//           <div className="rounded-3xl bg-white p-4 text-xl h-full">
//             fetch data from DB
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
