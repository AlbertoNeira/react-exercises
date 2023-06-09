import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Counter from './components/Counter';
import Login from './components/Login';
import ShowGithubUser from './components/ShowGithubUser';
import GithubUserList from './components/GitHubUserList';




function NotFound() {
  return <h1>404 - Not Found</h1>;
}


function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Github Users</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users/:username">Show Alberto Neira</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/login" element={<Login />} /> 
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
  </div>
  
  </Router>
  );
}

export default App;