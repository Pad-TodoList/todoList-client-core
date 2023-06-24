import { Event } from "../../events/types";

type StateReducer<State, M extends Event> = (
  state: State | undefined,
  message: M
) => State;

export { StateReducer };
