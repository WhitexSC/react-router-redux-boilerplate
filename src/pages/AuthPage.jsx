import React, { useState } from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import { setAuthData, clearAuthData } from '../reducers/authReducer';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { updateUserInfo } from '../reducers/userInfoReducer';

const nonFakeCredentials = {
  email: 'admin@gmail.com',
  password: 'admin'
}

const AuthPage = ({ setAuth, clearAuth, userSysInfo, updateUserInfo }) => {
  const [errorMessage, setErrorMessage] = useState();
  const handleLogin = () => {
    const isValidating = validation(userSysInfo.email)
    if (isValidating) {
      if (userSysInfo.email === nonFakeCredentials.email && userSysInfo.password === nonFakeCredentials.password) {
        let nonFakeToken = Math.random().toString(36).substring(7);
        setAuth({ token: nonFakeToken })
        updateUserInfo({ email: userSysInfo.email })
      } else {
        clearAuth()
        setErrorMessage('Wrong username or password')
      }
    }
  }
  const validation = (email) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email)
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign In
      </Header>
        <Form size='large'>
          <Form.Input
            type='email'
            fluid icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            onChange={(e) => setAuth({ email: e.target.value })}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setAuth({ password: e.target.value })}
          />
          <Button color='teal' fluid size='large' onClick={handleLogin}>
            Login
          </Button>
          {
            errorMessage
              ? errorMessage
              : null
          }
        </Form>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    userSysInfo: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuth: payload => dispatch(setAuthData(payload)),
    clearAuth: () => dispatch(clearAuthData()),
    updateUserInfo: payload => dispatch(updateUserInfo(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);


AuthPage.propTypes = {
  setAuth: PropTypes.func,
  clearAuth: PropTypes.func,
  userSysInfo: PropTypes.object,
  updateUserInfo: PropTypes.func,
}
