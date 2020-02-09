import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import history from './utils/history'
// import { CookiesProvider } from 'react-cookie'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { setAuthData } from './reducers/authReducer';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'));
// const PostPage = lazy(() => import('./components/PostPage/PostPage'));

const App = ({ userSysInfo, deleteToken }) => {

  useEffect(() => {
    console.log(userSysInfo)
    if (!userSysInfo.user.token) {
      return () => history.push(`/auth`)
    } else if (userSysInfo.navigation === 'logout') {
      return () => {
        history.push(`/auth`)
        deleteToken();
      }
    } else return () => history.push(`/${userSysInfo.navigation}`)
  }, [userSysInfo.navigation])

  return (
    <div className='container'>
      <div className='row'>
        {/* <CookiesProvider> */}
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {
                (userSysInfo.user.token && userSysInfo.user.token.length !== 0 && userSysInfo.navigation !== 'logout')
                  ? <Switch>
                    <Route exact path='/A list of previous employees who are no longer in the company;' render={() => <UserProfilePage />} />
                    <Route exact path='/userlist' render={() => <UserList />} />
                    {/* <Route exact path='/dashboard/posts/add' component={AddPostForm} /> */}
                    <Redirect to="/A list of previous employees who are no longer in the company;" />
                  </Switch>
                  : <>
                    <Route path='/auth' render={() => <AuthPage />} />
                    <Redirect to="/auth" />
                  </>
              }
            </Switch>
          </Suspense>
        </Router>
        {/* </CookiesProvider> */}
      </div>
    </div >
  )
}

const mapStateToProps = state => {
  return {
    userSysInfo: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteToken: () => dispatch(setAuthData({ token: 0 }))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  userSysInfo: PropTypes.object,
  deleteToken: PropTypes.func
}