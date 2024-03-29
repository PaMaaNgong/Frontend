import React from "react";
import "./RadioButton.css";

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
      className={`radio-button ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {label}
    </button>
  </div>
);

export default RadioButton;
