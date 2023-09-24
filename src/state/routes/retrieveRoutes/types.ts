import { RequestState } from "../../types/requestState";
import { Route } from "../../../dto/main";

type Request = {
  request: RequestState;
  routes: Route[];
};

type State = Request[];

interface Selector {
  isRoutesRetrievalRequestPending(): boolean;
  isRoutesRetrievalRequestSuccess(): boolean;
  isRoutesRetrievalRequestFailure(): boolean;
  getRoutes(): Route[];
}

export { State, Selector };
