import { Core } from "../core/main.ts";
import { Selector } from "../state/types/selector.ts";
import { EventDispatcher } from "../events/types.ts";
import { createContext } from "react";

const CoreContext = createContext<{
  core: Core;
  selector: Selector;
  eventDispatcher: EventDispatcher;
}>({
  core: {},
  eventDispatcher: {},
  selector: {},
} as {
  core: Core;
  selector: Selector;
  eventDispatcher: EventDispatcher;
});

export { CoreContext };
