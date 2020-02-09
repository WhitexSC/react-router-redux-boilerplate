import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

const UserCard = ({ userInfo }) => {
  const picturePath = '/images/avatar/large/'
  const avatar = userInfo.picture.length === 0
    ? `${picturePath}daniel.jpg`
    : `${picturePath}${userInfo.picture}`
  return (
    <Card>
      <Header as='h4'>Preview</Header>
      <Image className='picture' size='mini' src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{userInfo.email}</Card.Header>
        {
          userInfo.position.length > 0
            ? <Card.Meta>{userInfo.position}</Card.Meta>
            : null
        }
      </Card.Content>
    </Card>

  )
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(
  mapStateToProps
)(UserCard);

UserCard.propTypes = {
  userInfo: PropTypes.object
}