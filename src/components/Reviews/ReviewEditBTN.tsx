import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ReviewEditPopup from "./ReviewPopupComponent/ReviewEditPopup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1310,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 2,
};

interface ReviewEditBTNProps {
  courseNo: string;
  courseName: string;
  reviewId: string;
  accessToken: string;
}

const ReviewEditBTN: React.FC<ReviewEditBTNProps> = ({
  courseNo,
  courseName,
  reviewId,
  accessToken,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* Button section */}
      <img
        src="/images/edit_icon.png"
        alt="Edit Icon"
        onClick={handleOpen}
        className="w-8 h-8 rounded-lg shadow-md border-2 border-gray-200 hover:border-gray-950"
        style={{ cursor: "pointer" }}
      />

      {/* Popup section */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box sx={style} className="rounded-3xl flex justify-center">
          {/* flex-col for test*/}
          <ReviewEditPopup
            courseNo={courseNo}
            courseName={courseName}
            onClose={handleClose}
            reviewId={reviewId}
            accessToken={accessToken}
          />
          {/* <div>{courseNo}</div>
          <div>{courseName}</div>
          <div>{reviewId}</div>
          <div>{accessToken}</div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewEditBTN;
