import React from 'react'
import { Titles } from '../../UI/Titles/Titles'
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { Subtitle } from '../../UI/Subtitle/Subtitle'
import "./AboutMain.css"

export const AboutMain = () => {
  return (   
    <>
        <div className="flex justify-between gap-25 max-w-600 ml-20 mr-20 mt-20 ">
            <div className=" flex flex-col   max-w-300 min-w-100 justify-center text-left">

                <Titles className="text-center">Habilidades tecnicas</Titles>

                <Subtitle className="text-left">Frontend</Subtitle> 

                <Paragraphs>
                    ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus rerum voluptatibus adipisci eveniet, quibusdam, dignissimos cumque, beatae iste repellendus provident omnis dicta voluptas? Alias nam neque nesciunt quibusdam architecto.
                </Paragraphs>

                <Subtitle>Control de versiones</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>

                <Subtitle>Educacion y Liderazgo</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>

                <Subtitle>Desarrollo Web</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>
            </div>
            <div className="flex flex-col max-w-300 min-w-100 justify-center text-left">
                <Titles className="text-center">Habilidades sociales</Titles>
                <Subtitle className="text-left">Comunicacion Afectiva</Subtitle> 

                <Paragraphs>
                    ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus rerum voluptatibus adipisci eveniet, quibusdam, dignissimos cumque, beatae iste repellendus provident omnis dicta voluptas? Alias nam neque nesciunt quibusdam architecto.
                </Paragraphs>

            

                <Subtitle>Honestidad</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>

                <Subtitle>Respeto</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>

                <Subtitle>Trabajo en equipo</Subtitle>
                <Paragraphs>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit dolore molestiae enim officia, exercitationem sed magni reprehenderit fugiat dolorum autem temporibus optio possimus blanditiis, quas praesentium est! Voluptate, esse.
                </Paragraphs>
            </div>
        </div>    
    </>
  )
}


