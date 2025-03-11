import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems'

export const Header = () => {
  return (
    <>
    <header class="flex items-center justify-between h-20 w-full ">
      <h1 class="sm:text-2xl sm:ml-5 lg:text-4xl lg:ml-27 ">PORTAFOLIO</h1>

      <Navbar>
        <ul class="sm:text-lg flex space-x-8 text-2xl mr-30">
          <NavbarItems content="Inicio" Route="/" styles="text-white hover:text-blue-900"/>
          <NavbarItems content="Mas sobre mi" Route="/About" styles="text-white hover:text-blue-900"/>
          <NavbarItems content="Experiencia" Route="/Experience" styles="text-white hover:text-blue-900"/>
        </ul>
      </Navbar>
    </header>
    </>
  )
}
