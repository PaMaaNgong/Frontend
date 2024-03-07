import React, { useState } from "react";

interface ReviewEditPopupProps {
  courseNo: string;
  courseName: string;
  onClose: any;
  reviewId: string;
  accessToken: string;
}

const ReviewEditPopup: React.FC<ReviewEditPopupProps> = ({
  courseNo,
  courseName,
  onClose,
  reviewId,
  accessToken,
}) => {
  return <div></div>;
};

export default ReviewEditPopup;
