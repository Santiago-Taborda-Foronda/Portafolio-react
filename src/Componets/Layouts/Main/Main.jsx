import React from 'react'
import myImage from "../../../assets/images/mi-foto.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { NavbarItems } from '../../UI/NavbarItems/NavbarItems';
import { Navbar } from '../Navbar/Navbar';

export const Main = () => {
  return (
    <>
    <div className='flex space-x-30'>
        <div className='mt-25 max-w-100 min-w-100 ml-15'>
            <img src={myImage} alt="" className='w-90 h-90'/>
            <div>
                <Navbar >
                    <ul className="flex space-x-4 mt-4 max-w-90 justify-center text-3xl">
                    <NavbarItems  content={<FaInstagram />}/>
                    <NavbarItems content={<FaGithub />}/>
                    <NavbarItems content={<FaLinkedinIn />}/>
                    </ul>
                </Navbar>
                
            </div>
        </div>
        <div className='flex flex-wrap max-w-150 mt-20 mr-10'>
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
    
    </>
  )
}




