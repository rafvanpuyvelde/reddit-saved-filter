export type Test = { isTest: boolean };

export enum Routes {
  ROOT = '/',
  OAUTH = '/authorize_callback',
  LOGIN = '/login',
}

export enum RouteGuards {
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
}
