import React from 'react'
import { Titles } from '../../UI/Titles/Titles'
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { TextInfo } from '../../UI/TextInfo/TextInfo'

export const ExperienceAbout = () => {
  return (
    <>
    <div className="flex w-full justify-around mt-30 ">

        <div className=" space-y-30 ">
        <TextInfo className="">
            <Titles>Experiencia Laboral</Titles>
            <Paragraphs>
            Aún no tengo experiencia laboral formal, pero me considero una persona responsable, comprometida y con muchas ganas de aprender. Estoy preparado para asumir nuevos retos, adaptarme rápidamente y dar lo mejor de mí en cualquier proyecto que se me confíe.
            </Paragraphs>
        </TextInfo>

        <TextInfo>
        <Titles>Estudios</Titles>
            <Paragraphs>
            Actualmente me encuentro en proceso de formación como Tecnólogo en Análisis y Desarrollo de Software en el SENA. Durante este tiempo he adquirido conocimientos fundamentales en programación, bases de datos y desarrollo web
            </Paragraphs>
        </TextInfo>

        <TextInfo>
        <Titles>Nivel de ingles</Titles>
            <Paragraphs>
            Mi nivel de inglés es A1, lo que me permite comprender expresiones básicas y comunicar ideas simples. Actualmente estoy motivado por seguir aprendiendo y planeo continuar mis estudios para mejorar mi comprensión y fluidez en el idioma.
            </Paragraphs>
        </TextInfo>
        </div>

        
    </div>
    </>
  )
}

