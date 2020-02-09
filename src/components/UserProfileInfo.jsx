import React from 'react'
import { Button, Form, Input, Segment, Dropdown } from 'semantic-ui-react';
import FormSelector from './FormSelector'
import { fakeSkills } from '../fakeApi/fakeApi'
import Calendar from './Calendar';

const UserProfileInfo = () => {
  const [startDate, setStartDate] = React.useState()
  return (
    <>
      <div>
        <Segment>
          <Form>
            <Form.Field control={Input} type='email' label='Email'
              placeholder='First name'
              value={'data.email'}
            />
            <Form.Field control={Input} type='password'
              label='Password' placeholder='Last name'
              value={'data.password' || ''}
            />
            <Calendar />
            <FormSelector dataType='picture' />
            <FormSelector dataType='age' />
            {/* nationality */}
            <FormSelector dataType='nationality' />
            {/* position */}
            <FormSelector dataType='position' />
            {/* working_from */}
            {/* skills */}
            <Dropdown placeholder='Skills' fluid multiple selection options={fakeSkills} />
            <Button
              floated='center'
              onClick={() => alert('click')}
            >
              save
            </Button>
          </Form>
        </Segment>
      </div>

    </>
  )
}
export default UserProfileInfo
