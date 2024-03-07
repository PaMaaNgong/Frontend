import React, { useState } from "react";
import PopupBTN from "../Reviews/PopupBTN";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface PopupBTNProps {
  courseNo: string;
  courseName: string;
}

const PopupBTNWrapper: React.FC<PopupBTNProps> = ({ courseNo, courseName }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button section */}
      <img
        src="/images/review_icon.png"
        alt="Review Icon"
        onClick={handleOpen}
        className="w-25 h-8 text-3xl cursor-pointer"
      />
      {/* Popup section */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1310,
            bgcolor: "background.paper",
            border: "0px solid #000",
            boxShadow: 24,
            p: 2,
          }}
          className="rounded-3xl flex justify-center"
        >
          <PopupBTN courseNo={courseNo} courseName={courseName} />
        </Box>
      </Modal>
    </div>
  );
};

export default PopupBTNWrapper;
