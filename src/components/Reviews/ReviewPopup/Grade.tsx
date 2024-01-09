import React, { useEffect, useState } from "react";
import "./GradePopup.css";
import RadioButton from "./RadioButton";

interface GradeProps {
  grade: string | null;
  setGrade: Function;
  examFormat: string | null;
  setExamFormat: Function;
}

const Grade: React.FC<GradeProps> = ({
  grade,
  setGrade,
  examFormat,
  setExamFormat,
}) => {
  const grades = ["W", "F", "D", "D+", "C", "C+", "B", "B+", "A"];
  const [selectedNone, setSelectedNone] = useState<boolean>(false);
  const [selectedMidterm, setSelectedMidterm] = useState<boolean>(false);
  const [selectedFinal, setSelectedFinal] = useState<boolean>(false);

  const findExamFormat = () => {
    if (selectedNone) {
      setExamFormat("None");
    } else if (selectedMidterm && !selectedFinal) {
      setExamFormat("Midterm");
    } else if (!selectedMidterm && selectedFinal) {
      setExamFormat("Final");
    } else if (selectedMidterm && selectedFinal) {
      setExamFormat("Midterm&Final");
    } else {
      setExamFormat("Null");
    }
  };

  useEffect(() => {
    findExamFormat();
  }, [selectedNone, selectedMidterm, selectedFinal]);

  return (
    <div className="flex flex-col gap-6 pl-3 pt-5">
      <div className="text-2xl text-blue-900 font-bold">Grade (Optional)</div>
      <div className="shadow flex flex-row gap-0 w-fit rounded-full bg-gray-50">
        {grades.map((g, index) => (
          <RadioButton
            key={g}
            label={g}
            selected={grade === g}
            onSelect={() => setGrade(g)}
          />
        ))}
      </div>
      <div className="text-2xl text-blue-900 font-bold pt-5">
        Grading Method
      </div>
      <div className="shadow flex flex-row gap-0 w-fit rounded-full bg-gray-50">
        <button
          className={`radio-button-custom-popup ${
            selectedNone ? "selected" : ""
          } text-xl`}
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
        <div className="ui-segment-popup">
          <button
            className={`option ${selectedMidterm ? "active" : ""} text-xl`}
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
            className={`option ${selectedFinal ? "active" : ""} text-xl`}
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
