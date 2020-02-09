import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'


const UserList = () => {
  return (
    <div>
      <Container textAlign='justified'>
        <Header handleAuth={props.handleAuth} activeItem='posts' />
        <Form>
          <Form.Field
            control={Select}
            options={sortOptions}
            label={{ children: 'Sort posts', htmlFor: 'form-select-control-gender' }}
            placeholder='sort posts by ..'
            onChange={(event: React.FormEvent<HTMLSelectElement>, { value }: any) => sortData(value)}
            search
            searchInput={{ id: 'form-select-control-gender' }}
            value={sortBy}
          />

        </Form>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>time</Table.HeaderCell>
              <Table.HeaderCell>user</Table.HeaderCell>
              <Table.HeaderCell>title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              (state !== undefined) ? (
                state.map((el, index) =>
                  <Table.Row onClick={() => changeMode({ type: 'viewSelectedMode', id: el._id })} key={index} className={el._id}>
                    <Table.Cell> {el.time} </Table.Cell>
                    <Table.Cell> <UserCardPopup userEmail={(el.user === user.email) ? ('me') : (el.user)} /> </Table.Cell>
                    <Table.Cell> {el.title} </Table.Cell>
                  </Table.Row>
                )) : <p>Loading...</p>
            }
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button floated='right' icon labelPosition='left' primary size='small'
                  onClick={() => changeMode({ type: 'addMode' })} >
                  <Icon name='pencil alternate' /> Add Post
                        </Button>
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

  }
}

const mapDispatchtoProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(UserList)