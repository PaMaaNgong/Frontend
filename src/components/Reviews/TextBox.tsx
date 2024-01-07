import React, { useState } from "react";
import "./TextBox.css";

interface TextBoxProps {
  title: string;
  subTitle: string;
  setValue: Function;
  value: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  title,
  subTitle,
  setValue,
  value,
}) => {
  return (
    <div className="flex flex-col gap-0">
      <div>
        <label htmlFor={title} className="text-2xl leading-6">
          {title}
        </label>
        <span>{"  "}</span>
        <span className="text-2xl">{subTitle}</span>
      </div>
      <div className="relative mt-2 rounded-md">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block h-40 rounded-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl"
          style={{ width: 600, height: 130, minHeight: 130, maxHeight: 130 }}
        />
      </div>
    </div>
  );
};

export default TextBox;
