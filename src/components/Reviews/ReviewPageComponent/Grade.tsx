import React, { useEffect, useState } from "react";
import "./Grade.css";
import RadioButton from "./RadioButton";

interface GradeProps {
  grade: string | null;
  setGrade: Function;
  examMethod: Array<string>;
  setExamMethod: Function;
  triggleReset: boolean;
  credit: number;
  isForEdit: boolean;
}

const Grade: React.FC<GradeProps> = ({
  grade,
  setGrade,
  examMethod,
  setExamMethod,
  triggleReset,
  credit = 3,
  isForEdit = false,
}) => {
  const grades_3_credits = ["W", "F", "D", "D+", "C", "C+", "B", "B+", "A"];
  const grades_1_credits = ["W", "U", "S"];
  const [selectedNone, setSelectedNone] = useState<boolean>(false);
  const [selectedMidterm, setSelectedMidterm] = useState<boolean>(false);
  const [selectedFinal, setSelectedFinal] = useState<boolean>(false);

  const findExamMethod = () => {
    if (selectedNone) {
      setExamMethod([]);
    } else if (selectedMidterm && !selectedFinal) {
      setExamMethod(["midterm"]);
    } else if (!selectedMidterm && selectedFinal) {
      setExamMethod(["final"]);
    } else if (selectedMidterm && selectedFinal) {
      setExamMethod(["midterm", "final"]);
    } else {
      setExamMethod([]);
    }
  };

  useEffect(() => {
    if (isForEdit) {
      examMethod.map((element) => {
        if (element === "midterm") setSelectedMidterm(true);
        if (element === "final") setSelectedFinal(true);
      });
    }
  }, [examMethod]);

  useEffect(() => {
    findExamMethod();
  }, [selectedNone, selectedMidterm, selectedFinal]);

  useEffect(() => {
    setGrade("");
    setSelectedMidterm(false);
    setSelectedFinal(false);
  }, [triggleReset]);

  return (
    <div className="flex flex-col gap-6 pl-3 pt-5">
      {/* Grade */}
      <div className="text-2xl text-blue-900 font-bold">Grade (Optional)</div>
      <div className="shadow flex flex-row gap-0 w-fit rounded-full bg-gray-50">
        {credit === 1 ? (
          <>
            {grades_1_credits.map((g, index) => (
              <RadioButton
                key={g}
                label={g}
                selected={grade === g}
                onSelect={() => {
                  if (grade === g) setGrade("-");
                  else setGrade(g);
                }}
              />
            ))}
          </>
        ) : (
          <>
            {grades_3_credits.map((g, index) => (
              <RadioButton
                key={g}
                label={g}
                selected={grade === g}
                onSelect={() => {
                  if (grade === g) setGrade("-");
                  else setGrade(g);
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Grading method */}
      <div className="text-2xl text-blue-900 font-bold pt-5">
        Grading Method
      </div>
      <div className="shadow flex flex-row gap-0 w-fit rounded-full bg-gray-50">
        <button
          className={`radio-button-custom ${selectedNone ? "selected" : ""}`}
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
