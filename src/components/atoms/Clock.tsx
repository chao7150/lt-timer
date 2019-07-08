import * as React from "react";

interface ClockProps {
  remainingTimeMs: number;
}

export const formatMs = (remainingMs: number): string => {
  const remainingSec = Math.ceil(remainingMs / 1000);
  const min = Math.floor(remainingSec / 60);
  const sec = remainingSec % 60;
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
};

export const Clock = ({ remainingTimeMs }: ClockProps) => {
  return <p className="clock">{formatMs(remainingTimeMs)}</p>;
};
