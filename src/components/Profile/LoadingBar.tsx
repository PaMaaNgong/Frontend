import React from "react";

interface LoadingBarProps {
  currentProgress: number;
  total: number;
  color?: string; // Optional color prop, no longer setting default here
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  currentProgress,
  total,
  color, // Removed default value from here
}) => {
  // Calculate progress percentage
  const progressPercentage = total > 0 ? (currentProgress / total) * 100 : 0;

  // Determine bar color: default to gray if 0/0, else use provided color or blue
  const barColor = currentProgress === 0 && total === 0 ? 'bg-gray-400' : color || 'bg-blue-500';

  return (
    <div className="relative bg-gray-200 w-full h-8 rounded-full overflow-hidden">
      <div
        className={`${barColor} h-full`}
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-black">
        <span className="text-lg">{`${currentProgress}/${total}`}</span>
      </div>
    </div>
  );
};

export default LoadingBar;
