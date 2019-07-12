import * as React from "react";
import { ControllButton } from "../atoms/ControllButton";
import { TimerState } from "../../stores/TimeStore";

interface ControllAreaProps {
  timerState: TimerState;
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
        disabled={props.timerState === TimerState.Counting}
      />
      <ControllButton label="stop" onClickFunc={props.stopOnClick} />
      <ControllButton label="reset" onClickFunc={props.resetOnClick} />
    </div>
  );
};
