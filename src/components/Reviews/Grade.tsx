import React, { useState } from "react";
import "./Grade.css";
import RadioButton from "./RadioButton";

interface GradeProps {}

const Grade: React.FC<GradeProps> = () => {
  const grades = ["W", "F", "D", "D+", "C", "C+", "B", "B+", "A"];
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedNone, setSelectedNone] = useState<boolean>(false);
  const [selectedMidterm, setSelectedMidterm] = useState<boolean>(false);
  const [selectedFinal, setSelectedFinal] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <legend>Grade (Optional)</legend>
      <div className="flex flex-row gap-0">
        {grades.map((grade, index) => (
          <RadioButton
            label={grade}
            selected={selectedValue === grade}
            onSelect={() => setSelectedValue(grade)}
          />
        ))}
      </div>
      <legend>Grading Method</legend>
      <div className="flex flex-row gap-3">
        <button
          className={`radio-button ${selectedNone ? "selected" : ""}`}
          onClick={() => {
            if (selectedNone) {
              setSelectedNone(false);
            } else {
              setSelectedNone(true);
              setSelectedMidterm(false);
              setSelectedFinal(false);
            }
          }}
        >
          None
        </button>
        <div className="ui-segment">
          <button
            className={`option ${selectedMidterm ? "active" : ""}`}
            onClick={() => {
              if (selectedMidterm) {
                setSelectedMidterm(false);
              } else {
                setSelectedNone(false);
                setSelectedMidterm(true);
              }
            }}
          >
            Midterm
          </button>

          <button
            className={`option ${selectedFinal ? "active" : ""}`}
            onClick={() => {
              if (selectedFinal) {
                setSelectedFinal(false);
              } else {
                setSelectedNone(false);
                setSelectedFinal(true);
              }
            }}
          >
            Final
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grade;
