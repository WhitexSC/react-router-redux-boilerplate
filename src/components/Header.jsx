import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from '../utils/styles'

const Header = ({ activeItem, updateNavigation }) => {
  return (
    <Container justified>
      <Menu style={styles.headerStyle} tabular>
        <Menu.Item name='userinfo' active={activeItem === 'userinfo'} onClick={() => updateNavigation('userinfo')} />
        <Menu.Item name='userlist' active={activeItem === 'userlist'} onClick={() => updateNavigation('userlist')} />
        <Menu.Item name='logout' active={activeItem === 'logout'} onClick={() => updateNavigation('logout')} />
      </Menu>
    </Container>
  )
}

export default Header

Header.propTypes = {
  activeItem: PropTypes.string,
  updateNavigation: PropTypes.func.isRequired
}
