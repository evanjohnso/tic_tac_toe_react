import { Slider, Typography } from "@material-ui/core";
import React from "react";

interface ISliderProps {
  onChange: (val: number) => void;
}

const creditScore = {
  lowerBound: 300,
  upperBound: 850,
};

const sliderTicks = [
  {
    value: creditScore.lowerBound,
    label: creditScore.lowerBound.toString(),
  },
  {
    value: creditScore.upperBound,
    label: creditScore.upperBound.toString(),
  },
];

export const CreditScoreSlider: React.FC<ISliderProps> = (props) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Typography>Credit Score</Typography>
      <Slider
        style={{ width: "50%", marginLeft: "7px" }}
        min={creditScore.lowerBound}
        max={creditScore.upperBound}
        onChange={(e, val) => props.onChange(val as number)}
        defaultValue={creditScore.lowerBound}
        getAriaValueText={(v) => v.toString()}
        valueLabelDisplay={"auto"}
        marks={sliderTicks}
      />
    </div>
  );
};
