import React from 'react';

export const Login = () => {
  const client_id = process.env.REACT_APP_ID;
  const redirecturl = process.env.REACT_APP_REDIRECT_URL;
  const link =
    'https://www.reddit.com/api/v1/authorize?client_id=' +
    client_id +
    '&response_type=code&state=RANDOM_STRING&redirect_uri=' +
    redirecturl +
    '&duration=temporary&scope=identity history save';
  return (
    <div className="middle">
      <div className="signin">
        <h1>Please login with</h1>
        <a href={link}>
          <button variant="outline-success" size="lg">
            Reddit
          </button>
        </a>
      </div>
    </div>
  );
};
