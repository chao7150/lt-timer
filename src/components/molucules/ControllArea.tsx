import * as React from "react";
import { ControllButton } from "../atoms/ControllButton";

interface ControllAreaProps {
  timerState: "STOP" | "COUNTING";
  startOnClick: () => void;
  stopOnClick: () => void;
  resetOnClick: () => void;
}

export const ControllArea = (props: ControllAreaProps) => {
  return (
    <div id="controllarea">
      <ControllButton
        label="start"
        onClickFunc={props.startOnClick}
        disabled={props.timerState === "COUNTING"}
      />
      <ControllButton label="stop" onClickFunc={props.stopOnClick} />
      <ControllButton label="reset" onClickFunc={props.resetOnClick} />
    </div>
  );
};
