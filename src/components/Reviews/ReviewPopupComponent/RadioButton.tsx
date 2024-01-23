import React from "react";
import "./RadioButtonPopup.css";

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onSelect,
}) => (
  <div>
    <button
      className={`radio-button-popup ${selected ? "selected" : ""} text-xl`}
      onClick={onSelect}
    >
      {label}
    </button>
  </div>
);

export default RadioButton;
