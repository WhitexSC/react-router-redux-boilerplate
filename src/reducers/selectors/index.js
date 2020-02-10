import { createSelector } from 'reselect'
import { fakeUsers } from '../../fakeApi/fakeApi';

const getSortFilter = userInfoState => userInfoState.sortBy
const getUserList = () => fakeUsers;

function compareDate(a, b) {
  if (a.working_from < b.working_from) {
    return -1;
  }
  if (a.working_from > b.working_from) {
    return 1;
  }
  return 0;
}
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export const getSortedUserList = createSelector(
  [getSortFilter, getUserList],
  (sortBy, userList) => {
    switch (sortBy) {
      case 'name':
        return userList.sort(compareName)
      case 'working_from':
        return userList.sort(compareDate)
      case 'is_employee':
        return userList.filter(el => el.is_employee)
    }
  }
)