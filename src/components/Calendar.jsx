import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { connect } from 'react-redux'
import { updateUserInfo } from '../reducers/userInfoReducer'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Calendar = ({ userInfo, changeDate }) => {
  const defaultDate = new Date();
  return (
    <div style={{ marginBottom: 5 }}>
      <Header as='h5' style={{ marginBottom: 0 }}>Working since</Header>
      <DatePicker
        selected={userInfo.working_from || defaultDate}
        onChange={(date) => changeDate({ working_from: date })}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDate: payload => dispatch(updateUserInfo(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

Calendar.propTypes = {
  userInfo: PropTypes.object,
  changeDate: PropTypes.func
}
