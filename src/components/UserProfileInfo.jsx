import React from 'react'
import { Form, Segment, Dropdown } from 'semantic-ui-react';
import FormSelector from './FormSelector'
import { fakeSkills } from '../fakeApi/fakeApi'
import Calendar from './Calendar';

const UserProfileInfo = () => {
  return <div>
    <Segment>
      <Form>
        <FormSelector dataType='email' />
        <FormSelector dataType='name' />
        <Calendar />
        <FormSelector dataType='picture' />
        <FormSelector dataType='age' />
        <FormSelector dataType='nationality' />
        <FormSelector dataType='position' />
        <Dropdown placeholder='Skills' fluid multiple selection options={fakeSkills} />
      </Form>
    </Segment>
  </div>
}
export default UserProfileInfo
