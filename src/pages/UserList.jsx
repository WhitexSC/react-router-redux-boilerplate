import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Table, Form, Select } from 'semantic-ui-react'
import { updateUserInfo } from '../reducers/userInfoReducer'
import { sortUsers } from '../fakeApi/fakeApi'
import { currentNavigation } from '../reducers/authReducer'
import { getSortedUserList } from '../reducers/selectors'

const UserList = ({ userInfo, updateSearch, userSysInfo, updateNavigation }) => {
  const userList = getSortedUserList(userInfo)
  console.log(userList)
  return (
    <div>
      <Container textAlign='justified'>
        <Header activeItem={userSysInfo.navigation.navigation} updateNavigation={updateNavigation} />
        <Form>
          <Form.Field
            control={Select}
            options={sortUsers}
            label={{ children: 'Sort posts', htmlFor: 'form-select-control-gender' }}
            placeholder='sort posts by ..'
            onChange={(event, { value }) => updateSearch({ sortBy: value })}
            search
            searchInput={{ id: 'form-select-control-gender' }}
            value={userInfo.sortBy}
          />
        </Form>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>working from</Table.HeaderCell>
              <Table.HeaderCell>currently working</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              userList.map((el, index) => {
                return <Table.Row key={index}>
                  <Table.Cell> {el.name || el.email} </Table.Cell>
                  <Table.Cell> {el.working_from} </Table.Cell>
                  <Table.Cell> {el.is_employee ? 'yes' : 'no'} </Table.Cell>
                </Table.Row>
              })
            }
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    userSysInfo: state.auth,
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    updateSearch: payload => dispatch(updateUserInfo(payload)),
    updateNavigation: payload => dispatch(currentNavigation(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(UserList)

UserList.propTypes = {
  userInfo: PropTypes.object,
  updateSearch: PropTypes.func,
  userSysInfo: PropTypes.object,
  updateNavigation: PropTypes.func,
}
