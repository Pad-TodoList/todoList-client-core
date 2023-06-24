import { RequestState } from "../../types/requestState";
import { Identifiable, User, Tokens } from "../../../dto/main";

type Request = {
  request: RequestState;
  user: Identifiable<User>;
  tokens: Tokens;
};

type State = Request[];

interface Selector {
  isUserRetrievalRequestPending(tokens: Tokens): boolean;
  isUserRetrievalRequestSuccess(tokens: Tokens): boolean;
  isUserRetrievalRequestFailure(tokens: Tokens): boolean;
  getUser(tokens: Tokens): Identifiable<User>;
}

export { State, Selector };
