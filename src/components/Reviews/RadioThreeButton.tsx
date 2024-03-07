import React, { useEffect, useState } from "react";
import "./RadioThreeButton.css";

interface RadioThreeButtonProps {
  value: string | null;
  setValue: Function;
  value_list: Array<string>;
  triggleReset: boolean;
  isForEdit: boolean;
}

const RadioThreeButton: React.FC<RadioThreeButtonProps> = ({
  value,
  setValue,
  value_list,
  triggleReset,
  isForEdit = false,
}) => {
  useEffect(() => {
    setValue("");
  }, [triggleReset]);

  useEffect(() => {
    if (isForEdit) {
      // console.log(value);
      if (value === "easy") setValue("Easy ง่าย");
      else if (value === "normal") setValue("Normal ปานกลาง");
      else if (value === "hard") setValue("Hard ยาก");
    }
  }, [value]);

  return (
    <div className="flex justify-center text-gray-600">
      <div className="shadow flex flex-row gap-0 w-fit rounded-full bg-gray-50">
        {value_list.map((v, index) => (
          <div>
            <button
              key={index}
              className={`radio-three-button ${value === v ? "selected" : ""}`}
              onClick={() => {
                if (value === v) setValue("");
                else setValue(v);
              }}
            >
              {v}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioThreeButton;
