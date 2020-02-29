import React from 'react';
import { Link } from 'react-router-dom';
import { BaseRoute, RouteToString } from '../../types/route';

export const Root = () => {
  return (
    <>
      <Link to={RouteToString({ route: BaseRoute.ABOUT })}>
        to about
      </Link>
      <div>
        Root
      </div>
    </>
  );
};