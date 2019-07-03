import * as React from "react";
import { Clock } from "./atoms/Clock";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const App = () => <Clock remainingTimeMs={99999} />;
