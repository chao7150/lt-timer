import { observable } from "mobx";
import { DEFAULT_TIME } from "../consts";

export class ObservableTimeStore {
  @observable timerState: "STOP" | "COUNTING" = "STOP";
  @observable remainingTimeMs: number = DEFAULT_TIME;
  timerId?: NodeJS.Timeout = undefined;
}

export const observableTimeStore = new ObservableTimeStore();
