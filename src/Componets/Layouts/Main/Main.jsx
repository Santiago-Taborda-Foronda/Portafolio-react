import React from 'react'
import myImage from "../../../assets/images/mi-foto.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems';
import { Navbar } from '../Navbar/Navbar';
import { Titles } from '../../UI/Titles/Titles';

export const Main = () => {
  return (
    <>
    <div className="sm:ml-5 sm:mr-5 rounded-2xl bg-black/40 border border-white/10 text-center p-10 mt-25">
        <Titles className="" >Developer</Titles>
        <div className='flex sm:flex sm:flex-col sm:items-center sm:space-x-2 md:items-center lg:flex-row space-x-30'>

            <div className='sm:flex sm:flex-col sm:w-70 sm:max-h-70 sm:justify-center sm:ml-0 sm:items-center md:ml-0 mt-10 max-w-100 min-w-100 ml-15'>
                <Titles className="sm:text-3xl m-5">Santiago</Titles>
                <img src={myImage} alt="" className='sm:w-40 sm:h-45 lg:w-50 lg:h-50 w-90 h-90'/>
                <div class="">
                    <Navbar >
                        <ul className="flex space-x-4 mt-5 mt- max-w-90 justify-center text-3xl">
                        <NavbarItems  content={<FaInstagram />} isExternal href="https://www.instagram.com/santiago_t_6/"/>
                        <NavbarItems content={<FaGithub />} isExternal href="https://github.com/Santiago-Taborda-Foronda"/>
                        <NavbarItems content={<FaLinkedinIn />} isExternal href="https://github.com/Santiago-Taborda-Foronda"/>
                        </ul>
                    </Navbar>
                    
                </div>
            </div>
            <div className='flex sm:text-center sm:mr-0 flex-wrap max-w-150 mt-10 mr-10 lg:text-left'>
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
    
    </>
  )
}




