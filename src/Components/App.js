import React, { useState } from 'react';
import { Login } from './Login';
import { Browser } from './Browser/Browser';
import queryString from 'query-string';
import axios from 'axios';

function App() {
  const [accessToken, setAccessToken] = useState('');

  const query = queryString.parse(window.location.search);
  const token = query.code;

  const getAccessToken = () => {
    const sendaccess = {
      code: query.code
    };
    axios
      .post('http://localhost:3000/api/getaccesstoken', sendaccess, {
        'Content-Type': 'application/json'
      })
      .then(response => setAccessToken(response.data.accessToken))
      .catch(error => console.log(error));
  };

  if (token !== '' && token !== undefined) getAccessToken(token);

  return (
    <div className="App">
      <header className="App-header">
        {accessToken === '' ? <Login /> : <Browser />}
      </header>
    </div>
  );
}

export default App;
