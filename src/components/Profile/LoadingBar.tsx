import React from "react";

interface LoadingBarProps {
  currentProgress: number;
  total: number;
  color?: string; // Optional color prop
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  currentProgress,
  total,
  color = "bg-blue-500", // Default color
}) => {
  const progressPercentage = (currentProgress / total) * 100;

  return (
    <div className="relative bg-gray-200 w-full h-8 rounded-full overflow-hidden">
      <div
        className={`${color} h-full`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-black">
        <span className="text-lg">{`${currentProgress}/${total}`}</span>
      </div>
    </div>
  );
};

export default LoadingBar;
