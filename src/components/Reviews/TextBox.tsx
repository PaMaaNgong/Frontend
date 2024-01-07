import React, { useState } from "react";
import "./TextBox.css";

interface TextBoxProps {
  title: string;
  subTitle: string;
  setValue: Function;
}

const TextBox: React.FC<TextBoxProps> = ({ title, subTitle, setValue }) => {
  return (
    <div className="flex flex-col gap-0 w-screen">
      <div>
        <label
          htmlFor={title}
          className="text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <span>{"  "}</span>
        <span>{subTitle}</span>
      </div>
      <div className="relative mt-2 rounded-md">
        <input
          type="text"
          name={title}
          id={title}
          className="block w-4/12 h-16 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder=""
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextBox;
