import * as React from "react";
import "../styles/all.css";
import { Clock } from "./atoms/Clock";
import { ControllArea } from "./molucules/ControllArea";
import { observer, inject } from "mobx-react";
import { ObservableTimeStore } from "../stores/TimeStore";
import { action } from "mobx";
import { DEFAULT_TIME } from "../consts";

interface Props {
  store: ObservableTimeStore;
}

export const App = observer((props: Props) => {
  const store = props.store;
  const handleStartTimer = () => {
    if (store.timerState === "COUNTING") {
      return;
    }
    store.timerId = setInterval(() => {
      store.remainingTimeMs -= 1000;
    }, 1000);
    store.timerState = "COUNTING";
  };
  const handleStopTimer = () => {
    if (!store.timerId) {
      return;
    }
    clearInterval(store.timerId);
    store.timerId = undefined;
    store.timerState = "STOP";
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
