import React, { useEffect, useState } from "react";
import "./RadioThreeButton.css";

interface RadioThreeButtonProps {
  value: string | null;
  setValue: Function;
  value_list: Array<string>;
  triggleReset: boolean;
}

const RadioThreeButton: React.FC<RadioThreeButtonProps> = ({
  value,
  setValue,
  value_list,
  triggleReset,
}) => {
  useEffect(() => {
    setValue("");
  }, [triggleReset]);

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
