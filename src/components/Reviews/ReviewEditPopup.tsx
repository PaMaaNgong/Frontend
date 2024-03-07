import axios from "axios";
import React, { useState } from "react";

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

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
  const handleGetReview = async () => {
    try {
      const resp = await axios.get(`${URL}/profile/reviews/${courseNo}`, {
        headers: { accesstoken: accessToken },
      });
      if (resp.data.ok) alert("review suscessed");
      // console.log(resp);
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return <div></div>;
};

export default ReviewEditPopup;
