import { useContext } from "react";
import { useSelector } from "react-redux";
import { Boundaries } from "../core/main.ts";
import { CoreContext } from "./context.ts";
import { Identifiable } from "../dto/identifiable.ts";
import { User } from "../dto/user.ts";
import { Tokens } from "../dto/tokens.ts";

interface ViewModel {
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  isRequestPending: boolean;
  user: Identifiable<User>;
  retrieveUser(request: Boundaries["retrieveUser"]["request"]): void;
}

function useUserRetrieval(tokens: Tokens): ViewModel {
  const { selector, core } = useContext(CoreContext);

  return {
    isRequestPending: useSelector(() =>
      selector.isUserRetrievalRequestPending(tokens)
    ),
    isRequestFailure: useSelector(() =>
      selector.isUserRetrievalRequestFailure(tokens)
    ),
    isRequestSuccess: useSelector(() =>
      selector.isUserRetrievalRequestSuccess(tokens)
    ),
    user: useSelector(() => selector.getUser(tokens)),
    retrieveUser: core.retrieveUser,
  };
}

export { useUserRetrieval };
