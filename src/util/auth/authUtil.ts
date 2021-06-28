import jwt_decode from 'jwt-decode';

import type { JWT } from '../../types/auth/authTypes';

const getDecodedJwt = (token: string): JWT | null => {
  try {
    return jwt_decode(token) as JWT;
  } catch (error) {
    return null;
  }
};

const isTokenExpired = (token: string): boolean => {
  const jwt = getDecodedJwt(token);
  return jwt ? Date.now().valueOf() / 1000 >= jwt.exp : true;
};

export const setCurrentAuthToken = (token: string): undefined | string => {
  let err: string | undefined;

  try {
    localStorage.setItem('token', token);
  } catch (error) {
    err = error?.toString();
  }

  return err;
};

export const getCurrentAuthToken = (): string | null => {
  let token = localStorage.getItem('token');

  if (token && isTokenExpired(token)) {
    localStorage.removeItem('token');
    token = null;
  }

  return token;
};
