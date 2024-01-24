import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 12,
  p: 0,
};

interface SubmitBTNProps {
  isDataCorrect: boolean;
  onClick: Function;
}

const SubmitBTN: React.FC<SubmitBTNProps> = ({ isDataCorrect, onClick }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button
        className={`shadow-md w-36 h-14 ${
          isDataCorrect ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
        } text-white font-bold py-2 px-4 rounded-lg text-2xl`}
        onClick={() => {
          if (isDataCorrect) {
            onClick();
            handleOpen();
          }
        }}
      >
        Submit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        <Box sx={style} className="rounded-xl flex-col">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="w-18 h-8 text-red font-bold py-2 px-4 text-2xl"
            >
              X
            </button>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="text-2xl font-bold text-center">
                การรีวิวเสร็จสิ้น
              </div>
              <div className="text-2xl font-bold pb-7">
                ขอบคุณสำหรับความคิดเห็น
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SubmitBTN;
