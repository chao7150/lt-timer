import * as React from "react";

interface ButtonProps {
  label: string;
  onClickFunc: (arg1: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ControllButton = (props: ButtonProps) => (
  <button onClick={props.onClickFunc}>{props.label}</button>
);
