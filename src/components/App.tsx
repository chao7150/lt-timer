import * as React from "react";
import "../styles/all.css";
import { Clock } from "./atoms/Clock";
import { ControllArea } from "./molucules/ControllArea";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const App = () => (
  <div className="content">
    <Clock remainingTimeMs={99999} />
    <ControllArea />
  </div>
);
