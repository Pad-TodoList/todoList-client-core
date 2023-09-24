import { Route } from "../../../dto/main";

interface Repository {
  getRoutes(): Promise<Route[]>;
}

export { Repository };
