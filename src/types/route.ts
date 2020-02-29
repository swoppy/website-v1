import { UnreachableError } from './base/error';

export enum BaseRoute {
  ROOT,
  ABOUT,
}

export type Route =
 | { route: BaseRoute.ROOT }
 | { route: BaseRoute.ABOUT };

export const RouteToString = (path: Route) => {
  switch(path.route) {
    case BaseRoute.ROOT: {
      return '/';
    }
    case BaseRoute.ABOUT: {
      return '/about';
    }
    default: {
      throw new UnreachableError(path);
    }
  }
};