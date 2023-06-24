import { legacy_createStore as createStore, StoreEnhancer } from "redux";

import type { State } from "./types/state";
import type { Selector } from "./types/selector";
import { StateProvider } from "./types/stateProvider";
import { combineStateReducer } from "./utils/combineStateReducer";
import { reduceUserState, createUserSelector, userInitialState } from "./user";
import { events } from "../events/main.ts";

const initialState: State = {
  user: userInitialState,
};

const reduceState = combineStateReducer(initialState, {
  user: reduceUserState,
});

function createSelector(stateProvider: StateProvider): Selector {
  return {
    ...createUserSelector(stateProvider),
  };
}

function createState(middleware?: StoreEnhancer) {
  return createStore(reduceState, middleware);
}

export { createState, createSelector, State, Selector, initialState };
