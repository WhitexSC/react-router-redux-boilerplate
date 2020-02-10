import React, { useEffect } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from '../utils/styles'

const Header = ({ activeItem = 'userinfo', updateNavigation }) => {
  useEffect(() => {

  }, [activeItem])
  return (
    <Container>
      <Menu style={styles.headerStyle} tabular>
        <Menu.Item name='userinfo' active={activeItem === 'userinfo'} onClick={() => updateNavigation({ navigation: 'userinfo' })} />
        <Menu.Item name='userlist' active={activeItem === 'userlist'} onClick={() => updateNavigation({ navigation: 'userlist' })} />
        <Menu.Item name='logout' active={activeItem === 'auth'} onClick={() => updateNavigation({ navigation: 'auth' })} />
      </Menu>
    </Container>
  )
}

export default Header

Header.propTypes = {
  activeItem: PropTypes.string,
  updateNavigation: PropTypes.func.isRequired
}
