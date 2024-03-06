import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const sx1 = {
  "& .MuiFormControlLabel-label": {
    fontSize: 18,
    fontFamily: "kanit",
  },
};

const sx2 = {
  "& .MuiSvgIcon-root": {
    fontSize: 24,
    color: "#4B5563",
  },
};

interface RadioSelectionProps {
  label1: string;
  label2: string;
  label3: string;
  setValue: Function;
}

const RadioSelection: React.FC<RadioSelectionProps> = ({
  label1,
  label2,
  label3,
  setValue,
}) => {
  return (
    <div className="flex justify-center text-gray-600 font-['kanit']">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={label1}
            control={<Radio sx={sx2} />}
            label={label1}
            onClick={() => {
              setValue(label1);
            }}
            sx={sx1}
          />
          <FormControlLabel
            value={label2}
            control={<Radio sx={sx2} />}
            label={label2}
            onClick={() => {
              setValue(label2);
            }}
            sx={sx1}
          />
          <FormControlLabel
            value={label3}
            control={<Radio sx={sx2} />}
            label={label3}
            onClick={() => {
              setValue(label3);
            }}
            sx={sx1}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioSelection;
