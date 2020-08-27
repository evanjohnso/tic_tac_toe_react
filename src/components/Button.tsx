import { Button as MUIButton } from "@material-ui/core";
import React from "react";
import { classNames } from "../Utils";
interface IButton {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  className?: string;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <div className={classNames("row", props.className)}>
      <MUIButton
        className={classNames("primary-button")}
        onClick={props.onClick}
        disabled={props.isDisabled}
      >
        {props.text}
      </MUIButton>
    </div>
  );
};
