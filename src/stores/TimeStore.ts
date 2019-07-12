import { observable, computed, action } from "mobx";
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
  @action.bound
  decrement(value: number) {
    this.remainingTimeMs -= value;
  }
}

export const observableTimeStore = new ObservableTimeStore();
