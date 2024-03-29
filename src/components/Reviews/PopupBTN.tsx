import React, { useState } from "react";
import ReviewPopup from "./ReviewPopupComponent/ReviewPopup";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

interface PopupBTNProps {
  courseNo: string;
  courseName: string;
  reviewId: string;
  accessToken: string;
}

const PopupBTN: React.FC<PopupBTNProps> = ({
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
      {/* <button
        onClick={handleOpen}
        className="shadow-md w-40 h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-2xl"
      >
        Review
      </button> */}
      {/* Button section */}
      <img
        src="/images/review_icon.png"
        alt="Review Icon"
        onClick={handleOpen}
        className="w-25 h-8 text-3xl"
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
          <ReviewPopup
            courseNo={courseNo}
            courseName={courseName}
            onClose={handleClose}
            reviewId={reviewId}
            accessToken={accessToken}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default PopupBTN;
