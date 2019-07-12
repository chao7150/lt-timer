import { observable, computed, autorun } from "mobx";
import { DEFAULT_TIME } from "../consts";

export enum TimerState {
  Stop,
  Counting
}

export class ObservableTimeStore {
  @observable remainingTimeMs: number = DEFAULT_TIME;
  @observable timerId?: NodeJS.Timeout = undefined;
  @computed get timerState(): TimerState {
    return this.timerId ? TimerState.Counting : TimerState.Stop;
  }
}

export const observableTimeStore = new ObservableTimeStore();
