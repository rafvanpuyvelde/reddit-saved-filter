import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Routes, RouteGuards } from '../../../types/routes/routeTypes';

export interface GuardedRouteProps extends RouteProps {
  guard?: RouteGuards;
}

const GuardedRoute: React.FC<GuardedRouteProps> = ({
  children,
  guard = RouteGuards.UNAUTHENTICATED,
  ...rest
}) => {
  const getRedirectPath = (currentPath: string): string | null => {
    const authenticated = sessionStorage.getItem('token');

    const isAuthenticated = authenticated !== null && authenticated !== '';
    const isAuthPath =
      currentPath === Routes.OAUTH || currentPath === Routes.LOGIN;

    if (isAuthenticated && isAuthPath) return Routes.ROOT;
    if (!isAuthenticated && guard === RouteGuards.AUTHENTICATED)
      return Routes.LOGIN;

    return null;
  };

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const pathname = getRedirectPath(location.pathname);

        return pathname !== null ? (
          <Redirect
            push
            to={{
              pathname,
              state: {
                referrer: location,
              },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

export default GuardedRoute;
