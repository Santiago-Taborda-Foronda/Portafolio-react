import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems'

export const Header = () => {
  return (
    <>
    <header class="flex items-center justify-between h-20 w-full ">
      <h1 class="text-4xl ml-27">Santiago</h1>

      <Navbar>
        <ul class="flex space-x-4 text-2xl mr-30">
          <NavbarItems content="Home" Route="/" styles="text-white hover:text-blue-900"/>
          <NavbarItems content="About" Route="/About" styles="text-white hover:text-blue-900"/>
        </ul>
      </Navbar>
    </header>
    </>
  )
}
