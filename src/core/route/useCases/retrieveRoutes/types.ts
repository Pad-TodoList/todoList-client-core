import { Route } from "../../../../dto/route.ts";

type RetrieveRoutesRequest = void;
type RetrieveRoutesSuccess = Route[];
type RetrieveRoutesFailure = Route[];

type RetrieveRoutesInteractor = Interactor<
  RetrieveRoutesRequest,
  RetrieveRoutesSuccess,
  RetrieveRoutesFailure
>;

export type { RetrieveRoutesInteractor };
