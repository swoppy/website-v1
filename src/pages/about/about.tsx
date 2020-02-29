import React from 'react';
import { Link } from 'react-router-dom';
import { BaseRoute, RouteToString } from '../../types/route';

export const About = () => {
  return (
    <>
      <Link to={RouteToString({ route: BaseRoute.ROOT })}>
        to root
      </Link>
      <div>
        About
      </div>
    </>
  );
};