import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function BasicExample () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topics" component={Topics}></Route> 
        {/* 这里加exact会导致二级路由匹配不到 */}
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}
function Topics({match}) {
  // 使用match将会更加灵活
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props State</Link>
        </li>
      </ul>
      <Route path={`/topics/:topicId`} component={Topic}></Route>
      <Route exact path="/topics"
        render={() => (<h3>Please select a topic.</h3>)}  
      >
      </Route>
    </div>
  )
}
function Topic ({match}) {
  return (
    <div>
      {match.params.topicId}
    </div>
  );
}
ReactDOM.render(<BasicExample />, document.getElementById('root'));
