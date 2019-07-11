import * as React from "react";
import { tsPropertySignature } from "@babel/types";

interface ButtonProps {
  label: string;
  onClickFunc: (arg1: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const ControllButton = (props: ButtonProps) => (
  <button onClick={props.onClickFunc} disabled={props.disabled}>
    {props.label}
  </button>
);
