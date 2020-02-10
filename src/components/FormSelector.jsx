import React from 'react'
import { Form, Select, Input } from "semantic-ui-react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { updateUserInfo } from '../reducers/userInfoReducer';
import { fakeAges, nationality, position } from '../fakeApi/fakeApi'
const avatars = require('../utils/avatar.json')

const FormSelector = ({ dataType, updateUserInfo, userInfo }) => {
  console.log(userInfo)
  let placeholder = ''
  let label = ''
  let htmlFor = ''
  let type = ''
  const options = () => {
    switch (dataType) {
      // case "password":
      //   label = 'password'
      //   type = 'password'
      case "name":
        placeholder = 'name'
        label = 'Type your name'
        type = 'text'
        return
      case "picture":
        htmlFor = 'form-select-control-picture'
        label = 'Select avatar'
        placeholder = 'picture'
        return avatars.avatars
      case "age":
        htmlFor = 'form-select-control-age'
        label = 'Select age'
        placeholder = 'age'
        return fakeAges()
      case "nationality":
        htmlFor = 'form-select-control-nationality'
        label = 'Your nationality'
        placeholder = 'nationality'
        return nationality
      case "position":
        htmlFor = 'form-select-control-position'
        label = 'Select position'
        placeholder = 'position'
        return position
    }
  }

  const renderForm = () => {
    if (dataType === "email") {
      return <Form.Field control={Input} type='email' label='email'
        placeholder={placeholder}
        value={userInfo.email}
      />
    } if (dataType === "name") {
      return <Form.Field control={Input} type='text' label='name'
        placeholder='Type your name'
        value={userInfo.name}
        onChange={(event, { value }) =>
          updateUserInfo({ [dataType]: value })
        }
      />
    } else {
      return <Form.Field
        key={dataType}
        control={Select}
        options={options()} //object with picture { key: 'm', text: 'Male', value: 'male.jpg' },
        label={{ children: label, htmlFor: htmlFor }}
        placeholder={placeholder}
        onChange={(event, { value }) =>
          updateUserInfo({ [dataType]: value })
        }
        search
        searchInput={{ id: { htmlFor } }}
        value={userInfo.dataType}
      />
    }
  }

  return renderForm()
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: (payload) => dispatch(updateUserInfo(payload))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSelector)

FormSelector.propTypes = {
  dataType: PropTypes.string.isRequired,
  updateUserInfo: PropTypes.func,
  userInfo: PropTypes.object
}
