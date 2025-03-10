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
    <div className="border-3 rounded-2xl text-center p-10 mt-25">
        <Titles className="" >Developer</Titles>
        <div className='flex space-x-30'>
            <div className='mt-10 max-w-100 min-w-100 ml-15'>
                <Titles className="m-5">Santiago</Titles>
                <img src={myImage} alt="" className='w-90 h-90'/>
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
            <div className='flex flex-wrap max-w-150 mt-10 mr-10 text-left'>
                <Paragraphs>
                Soy un Aprendiz de Sena Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam incidunt aperiam error vel quibusdam blanditiis tempora dicta velit omnis qui sapiente iure, numquam officia commodi! Eligendi inventore optio modi ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt atque, ducimus ut beatae architecto corporis vitae. Laborum aperiam dolore necessitatibus distinctio rerum? Delectus ea sapiente recusandae sit doloremque ab laudantium?
                </Paragraphs>

                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi recusandae atque doloremque, id reprehenderit! Repudiandae voluptatum voluptates inventore voluptas obcaecati harum maxime unde, omnis illo? Soluta, sunt in. Eveniet!
                </Paragraphs>

                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet pariatur eligendi dolor est harum, sunt incidunt nisi libero, quasi in accusamus nihil aut nulla dignissimos similique eum quia quae.
                </Paragraphs>
            </div>
        </div>

    </div>
    
    </>
  )
}




