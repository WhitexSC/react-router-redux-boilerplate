import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import history from './utils/history'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { setAuthData } from './reducers/authReducer';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'));
const UserList = lazy(() => import('./pages/UserList'));

const App = ({ userSysInfo, updateSysInfo }) => {
  useEffect(() => {
    if (userSysInfo.navigation.navigation === 'auth' || !userSysInfo.user.token || userSysInfo.user.token.length === 0) {
      if (userSysInfo.user.token.length !== 0) updateSysInfo({ token: '' });
      return () => {
        history.push(`/auth`)
      }
    } else return () => history.push(`/${userSysInfo.navigation.navigation}`);
  }, [userSysInfo.navigation, userSysInfo.token])

  return (
    <div className='container'>
      <div className='row'>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            {
              (userSysInfo.user.token && userSysInfo.user.token.length !== 0 && userSysInfo.navigation.navigation !== 'logout')
                ? <Switch>
                  <Route exact path='/userinfo' render={() => <UserProfilePage />} />
                  <Route exact path='/userlist' render={() => <UserList />} />
                  <Redirect to="/userinfo" />
                </Switch>
                : <>
                  <Route path='/auth' render={() => <AuthPage />} />
                  <Redirect to="/auth" />
                </>
            }
          </Suspense>
        </Router>
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
    updateSysInfo: payload => dispatch(setAuthData(payload))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  userSysInfo: PropTypes.object,
  updateSysnfo: PropTypes.func

}