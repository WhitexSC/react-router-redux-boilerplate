
import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserProfileInfo from './UserProfileInfo'

const UserProfile = () => {
  return (
    <Container justified={true.toString()}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={7}>
            <UserProfileInfo />
          </Grid.Column>
          <Grid.Column textAlign='center' width={5}>
            <UserCard />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default UserProfile