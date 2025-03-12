import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems'

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full p-4 sm:h-20">
      <h1 className="text-xl sm:text-2xl sm:ml-5 lg:text-5xl md:text-4xl lg:ml-28 text-white mb-3 sm:mb-0">
        PORTAFOLIO
      </h1>

      <Navbar>
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-8 sm:text-lg md:text-2xl 2xl:text-3xl text-white">
          <NavbarItems content="Inicio" Route="/" styles="hover:text-blue-900" />
          <NavbarItems content="Mas sobre mi" Route="/About" styles="hover:text-blue-900" />
          <NavbarItems content="Experiencia" Route="/Experience" styles="hover:text-blue-900" />
        </ul>
      </Navbar>
    </header>
  )
}
