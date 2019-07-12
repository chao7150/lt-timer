import * as React from "react";
import "../styles/all.css";
import { Clock } from "./atoms/Clock";
import { ControllArea } from "./molucules/ControllArea";
import { observer, inject } from "mobx-react";
import { ObservableTimeStore, TimerState } from "../stores/TimeStore";
import { action } from "mobx";
import { DEFAULT_TIME } from "../consts";

interface Props {
  store: ObservableTimeStore;
}

export const App = observer((props: Props) => {
  const store = props.store;
  const handleStartTimer = () => {
    if (store.timerState === TimerState.Counting) {
      return;
    }
    if (store.remainingTimeMs <= 0) {
      return;
    }
    store.timerId = setInterval(() => {
      store.remainingTimeMs -= 1000;
      if (store.remainingTimeMs <= 0) {
        clearInterval(store.timerId!);
        store.timerId = undefined;
      }
    }, 1000);
  };
  const handleStopTimer = () => {
    if (!store.timerId) {
      return;
    }
    clearInterval(store.timerId);
    store.timerId = undefined;
  };

  return (
    <div className="content">
      <Clock remainingTimeMs={store.remainingTimeMs} />
      <ControllArea
        timerState={store.timerState}
        startOnClick={handleStartTimer}
        stopOnClick={handleStopTimer}
        resetOnClick={action(
          () => (props.store.remainingTimeMs = DEFAULT_TIME)
        )}
      />
    </div>
  );
});
