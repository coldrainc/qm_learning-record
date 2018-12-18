import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

// 鉴权
var fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
}
function AuthExample () {
  return (
    <Router>
      <div>
        {/* <Route path='/' component={AuthButton}/> 这样AuthButton可以拿到history*/}
        <AuthButton/>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path='/public' component={Public}></Route>
        <Route path='/login' component={Login}></Route>
        <PrivateRoute path='/protected' component={Protected}></PrivateRoute>
      </div>
    </Router>
  );
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    // fakeAuth.isAuthenticated = true;
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render() {
    let { from } = this.props.location.state || {from: {pathname: '/'}};
    if(this.state.redirectToReferrer) 
      return (
        <Redirect to={from}/> // 这个地方将访问protected的路由
      );
    return (
      <div>
        <p>You must log in to view the page at{from.pathname} </p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
const AuthButton = withRouter(({history}) => { // withRouter可以直接获取Router的history
  return (
    fakeAuth.isAuthenticated ? 
    (<p>Welcom! <button onClick={() => {
      fakeAuth.signout(() => {
        // Redirect?
        // js 并非 jsx输出
        history.push('/') // 会刷新。所以isAuthenticatedd变为开始的
      });
    }}>Sign out</button></p>): 
    (<p>You are not logged in.</p>)
  )
})
function Public() {
  return(
    <div>Public</div>
  );
}
function Protected () {
  return (
    <div>Protected</div>
  );
}
function PrivateRoute({component: Component, ...rest}) { // 这里的...是收纳跟python一样
  return(
    <Route 
      {...rest} // path="/protected"
      render={(props) => ( // 就是跟平常Route里面的组件接收的props一样的
        fakeAuth.isAuthenticated ? 
        <Component/> :
        <Redirect to={{
          pathname: '/login', 
          state: {from: props.location}}}/> // 作为props传给login组件而且是在location里面的一个参数
      )}
    />
  );
}
ReactDOM.render(
  <AuthExample/>
  ,document.getElementById('root'));