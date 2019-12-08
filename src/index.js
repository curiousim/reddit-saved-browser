import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './Components/App';
import { Login } from './Components/Login';

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={Login} />
//       <Route path="/app" component={App} />
//     </div>
//   </Router>
// )

ReactDOM.render(<App />, document.getElementById('root'));
