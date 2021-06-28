import React from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Routes } from '../../types/routes/routeTypes';

const Login: React.FC = () => {
  const redditOauthHandler = () => {
    const identifier = uuid();

    sessionStorage.setItem('identifier', identifier);

    const clientId = 'j3sx1ueHcjxOlg';
    const redirectUri = `${window.location.origin}/authorize_callback`;
    const oauthUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${identifier}&redirect_uri=${redirectUri}&duration=temporary&scope=identity,history,`;

    window.location.href = oauthUrl;
  };

  if (sessionStorage.getItem('token')) return <Redirect to={Routes.ROOT} />;

  return (
    <p>
      Saved filter for Reddit
      <button type="button" onClick={() => redditOauthHandler()}>
        Reddit Auth
      </button>
    </p>
  );
};

export default Login;
