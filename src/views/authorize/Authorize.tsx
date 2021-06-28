import React, { useCallback, useEffect, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Routes } from '../../types/routes/routeTypes';

enum RouteParams {
  STATE = 'state',
  CODE = 'code',
}

const Authorize: React.FC = () => {
  const history = useHistory();

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

    const data = await response.json();

    if (data?.access_token) {
      sessionStorage.removeItem('identifier');
      sessionStorage.setItem('token', data?.access_token);
    }
  }, [codeParam]);

  const getUserIdentity = async () => {
    const response = await fetch('https://oauth.reddit.com/api/v1/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'User-Agent': 'SavedFilter/0.1 by u/SaltySpartan88',
      },
    });

    const data = await response.json();

    if (data?.subreddit?.display_name_prefixed) {
      sessionStorage.setItem(
        'username',
        data?.subreddit?.display_name_prefixed,
      );
    }
  };

  useEffect(() => {
    if (hasValidAuthParams) {
      getAuthToken().then(() =>
        getUserIdentity().then(() => history.replace(Routes.ROOT)),
      );
    }
  }, [getAuthToken, hasValidAuthParams, history]);

  if (!hasValidAuthParams) {
    sessionStorage.removeItem('identifier');
    sessionStorage.removeItem('token');
  }

  return <Redirect to={Routes.ROOT} />;
};

export default Authorize;
