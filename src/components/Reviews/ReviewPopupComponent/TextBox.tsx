import React, { useState } from "react";

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
        <label htmlFor={title} className="text-2xl text-blue-900 font-bold">
          {title}
        </label>
        <span className="text-2xl">{"  "}</span>
        <span className="text-2xl text-blue-900">{subTitle}</span>
      </div>
      <div className="relative mt-2">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block h-40 rounded-2xl text-2xl shadow py-0.25 pl-2 pr-1 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          style={{ width: 650, height: 130, minHeight: 130, maxHeight: 130 }}
          maxLength={512}
        />
      </div>
    </div>
  );
};

export default TextBox;
