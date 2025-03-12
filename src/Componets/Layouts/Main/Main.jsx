import React from 'react'
import myImage from "../../../assets/images/mi-foto.jpg"
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"

import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems'
import { Navbar } from '../Navbar/Navbar'
import { Titles } from '../../UI/Titles/Titles'

export const Main = () => {
  return (
    <div className="w-[90%] max-w-[700px] sm:ml-5 sm:mr-5 lg:min-w-250 rounded-xl bg-black/40 border border-white/10 text-center p-6 sm:p-10 mt-12">
      <Titles>Developer</Titles>

      <div className="flex flex-col items-center lg:flex-row lg:space-x-30 mt-5">

        {/* Imagen y redes */}
        <div className="flex flex-col items-center mt-6 lg:mt-0 sm:w-70 sm:max-h-70">
          <Titles className="sm:text-3xl m-3">Santiago</Titles>
          <img
            src={myImage}
            alt="Foto de Santiago"
            className="w-32 h-32 sm:w-40 sm:h-45 lg:w-50 lg:h-50 "
          />

          <div className="mt-4">
            <Navbar>
              <ul className="flex space-x-4 justify-center text-2xl sm:text-3xl">
                <NavbarItems content={<FaInstagram />} isExternal href="https://www.instagram.com/santiago_t_6/" />
                <NavbarItems content={<FaGithub />} isExternal href="https://github.com/Santiago-Taborda-Foronda" />
                <NavbarItems content={<FaWhatsapp />} isExternal href="https://wa.me/573216682254" />
              </ul>
            </Navbar>
          </div>
        </div>

        {/* Descripción */}
        <div className="flex flex-col items-center text-center mt-8 lg:max-w-120 lg:text-left lg:items-start sm:mr-0 mr-2 ml-2 gap-2">
          <Paragraphs>
            Soy aprendiz de programación y estudio actualmente en el SENA, donde me formaré como Tecnólogo en Análisis y Desarrollo de Software. Me apasiona el mundo del desarrollo y cada día busco mejorar mis habilidades para ser un mejor profesional.
          </Paragraphs>
          <Paragraphs>
            Me especializo principalmente en el frontend, creando interfaces modernas y funcionales. Manejo tecnologías como HTML, CSS, JavaScript y React. También tengo conocimientos en backend con Node.js y en bases de datos como MySQL y MongoDB.
          </Paragraphs>
          <Paragraphs>
            Disfruto programar, diseñar y dar estilo a las aplicaciones. Me gusta aprender cosas nuevas, mejorar mis diseños y mantenerme actualizado con las tendencias del desarrollo web. Cada proyecto es una oportunidad para crecer.
          </Paragraphs>
        </div>

      </div>
    </div>
  )
}

