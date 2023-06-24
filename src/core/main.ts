import {
  createUserCore,
  UserUseCases,
  UserCore,
  UserBoundaries,
  UserDependencies,
} from "./user";

const UseCases = {
  ...UserUseCases,
};

type UseCases = UserUseCases;

type Boundaries = UserBoundaries;

type Core = UserCore;

type Dependencies = UserDependencies;
function createCore(dependencies: Dependencies): Core {
  return {
    ...createUserCore(dependencies),
  };
}

export { createCore, Core, Boundaries, UseCases, Dependencies };
