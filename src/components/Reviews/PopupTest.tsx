import React, { useState } from "react";
import "./PopupTest.css";
import ReviewPopup from "./ReviewPopup";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface PopupTestProps {}

const PopupTest: React.FC<PopupTestProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>Open Dialog</button>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex justify-center">
          <ReviewPopup
            courseNo="207115-001"
            courseName="Physics Laboratory for Engineering and Agro-Industry Students 1"
            onClose={handleOpen}
          />
        </div>
      </Dialog>
    </>
  );
};

export default PopupTest;
