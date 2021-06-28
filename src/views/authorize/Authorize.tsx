import React, { useCallback, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';

import { Routes } from '../../types/routes/routeTypes';

enum RouteParams {
  STATE = 'state',
  CODE = 'code',
}

const Authorize: React.FC = () => {
  const params = new URL(document.location.href).searchParams;

  const stateParam = useMemo(() => params.get(RouteParams.STATE), [params]);
  const codeParam = useMemo(() => params.get(RouteParams.CODE), [params]);

  const hasValidAuthParams = useMemo(
    () =>
      stateParam &&
      codeParam &&
      stateParam === sessionStorage.getItem('identifier'),
    [codeParam, stateParam],
  );

  const getAuthToken = useCallback(async () => {
    const formData = new FormData();

    if (!codeParam) return undefined;

    formData.append('grant_type', 'authorization_code');
    formData.append('code', codeParam);
    formData.append('redirect_uri', 'http://localhost:3000/authorize_callback');

    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: 'Basic ajNzeDF1ZUhjanhPbGc6',
      },
    });

    const token = await response.json();

    if (token?.access_token) {
      sessionStorage.removeItem('identifier');
      sessionStorage.setItem('token', token?.access_token);
    }
  }, [codeParam]);

  useEffect(() => {
    if (hasValidAuthParams) getAuthToken();
    return () => {};
  }, [getAuthToken, hasValidAuthParams]);

  if (!hasValidAuthParams) {
    sessionStorage.removeItem('identifier');
    sessionStorage.removeItem('token');
  }

  return <Redirect to={Routes.ROOT} />;
};

export default Authorize;
