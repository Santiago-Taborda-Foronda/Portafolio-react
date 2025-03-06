import React from 'react'
import { NavLink, Route } from 'react-router-dom'

export const NavbarItems = ({content, styles, Route}) => {
  return (
    <>
        <li>
            <NavLink className={styles}to={Route}>{content}</NavLink>
        </li>
    </>
  )
}
