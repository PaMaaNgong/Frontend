import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  height: 160,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 12,
  p: 0,
};

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

interface ReviewDeleteBTNProps {
  courseNo: string;
  courseName: string;
  reviewId: string;
  accessToken: string;
}

const ReviewDeleteBTN: React.FC<ReviewDeleteBTNProps> = ({
  courseNo,
  courseName,
  reviewId,
  accessToken,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = async () => {
    try {
      const resp = await axios.delete(
        `${URL}/course/${courseNo}/reviews/${reviewId}`,
        {
          headers: { accesstoken: accessToken },
        }
      );
      if (resp.data.ok) alert("review suscessed");
    } catch (err: any) {
      alert(err.response.data.message);
    }
    handleClose();
  };

  return (
    <div>
      {/* Button section */}
      <img
        src="/images/delete_icon.png"
        alt="Delete Icon"
        onClick={handleOpen}
        className="w-8 h-8 rounded-lg shadow-md border-2 border-gray-200 hover:border-gray-950"
        style={{ cursor: "pointer" }}
      />

      {/* Popup section */}
      <Modal
        open={open}
        onClose={handleClose} // for exit
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box
          sx={style}
          className="rounded-3xl flex flex-col gap-5 justify-center"
        >
          <div className="text-2xl text-center">
            คุณต้องการลบรีวิวนี้หรือไม่
          </div>
          <div className="text-2xl flex flex-row gap-4 justify-center">
            <button
              className="shadow-md w-32 h-14 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-2xl"
              onClick={handleDelete}
            >
              ใช่
            </button>
            <button
              className={
                "shadow-md w-32 h-14 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-2xl"
              }
              onClick={handleClose}
            >
              ไม่
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewDeleteBTN;
