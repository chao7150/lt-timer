import * as React from "react";
import { ControllButton } from "../atoms/ControllButton";

const mockOnClick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
): void => console.log(e);

export const ControllArea = () => {
  return (
    <div id="controllarea">
      <ControllButton label="start" onClickFunc={mockOnClick} />
      <ControllButton label="stop" onClickFunc={mockOnClick} />
      <ControllButton label="reset" onClickFunc={mockOnClick} />
    </div>
  );
};
