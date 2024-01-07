import React, { useState } from "react";
import "./Grade.css";

interface GradeProps {}

const Grade: React.FC<GradeProps> = () => {
  return (
    <div>
      <legend>Grade (Optional)</legend>

      <legend>Grading Method</legend>
    </div>
  );
};

export default Grade;
