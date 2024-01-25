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
        <label htmlFor={title} className="text-3xl text-blue-900 font-bold">
          {title}
        </label>
        <span className="text-3xl">{"  "}</span>
        <span className="text-3xl text-blue-900">{subTitle}</span>
      </div>
      <div className="relative mt-3">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block rounded-2xl shadow py-0.25 pl-3.5 pr-1 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          style={{
            width: 780,
            height: 140,
            minHeight: 140,
            maxHeight: 140,
            fontSize: 28,
            lineHeight: 1.23,
          }}
          maxLength={512}
        />
      </div>
    </div>
  );
};

export default TextBox;
