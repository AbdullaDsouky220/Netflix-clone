import React from 'react'

const NavbarItem = ({label,styles=''}) => {
  return (
    <div className={styles}>{label}</div>
  )
}

export default NavbarItem