import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems'

export const Header = () => {
  return (
    <>
    <header class="flex items-center justify-around h-26 w-full bg-indigo-600  ">
      <h1 class="text-4xl ">Santiago</h1>

      <Navbar>
        <ul class="flex space-x-4 text-2xl">
          <NavbarItems content="Home" Route="/" styles="text-white hover:text-yellow-400"/>
          <NavbarItems content="About" Route="/About" styles="text-white hover:text-yellow-400"/>
        </ul>
      </Navbar>
    </header>
    </>
  )
}
