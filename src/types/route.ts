import { UnreachableError } from './base/error';

export enum BaseRoute {
  HOME,
  ABOUT,
}

export type Route =
 | { route: BaseRoute.HOME }
 | { route: BaseRoute.ABOUT };

export const RouteToString = (path: Route) => {
  switch(path.route) {
    case BaseRoute.HOME: {
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