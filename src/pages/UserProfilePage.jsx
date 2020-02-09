import React from 'react'
import PropTypes from 'prop-types'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header'
import { currentNavigation } from '../reducers/authReducer'
import { connect } from 'react-redux'

const Dashboard = ({ updateNavigation, state }) => {
  return (
    <>
      <Header activeItem={state.navigation} updateNavigation={updateNavigation} />
      <UserProfile />
    </>
  )
}

const mapStateToProps = state => {
  return {
    state: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNavigation: payload => dispatch(currentNavigation(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

Dashboard.propTypes = {
  updateNavigation: PropTypes.func,
  state: PropTypes.object
}
