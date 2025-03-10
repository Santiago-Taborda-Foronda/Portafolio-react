import React from 'react'
import { Titles } from '../../UI/Titles/Titles'
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { TextInfo } from '../../UI/TextInfo/TextInfo'

export const ExperienceAbout = () => {
  return (
    <>
    <div className="flex w-full justify-around ">

        <div className=" space-y-30 ">
        <TextInfo className="">
            <Titles>Experiencia Laboral</Titles>
            <Paragraphs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui modi eos! Vero molestias maiores voluptates quis sed aspernatur quos, ducimus, modi ab fugit asperiores tenetur debitis, fugiat obcaecati! Quibusdam?
            </Paragraphs>
        </TextInfo>

        <TextInfo>
        <Titles>Estudios</Titles>
            <Paragraphs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui modi eos! Vero molestias maiores voluptates quis sed aspernatur quos, ducimus, modi ab fugit asperiores tenetur debitis, fugiat obcaecati! Quibusdam?
            </Paragraphs>
        </TextInfo>

        <TextInfo>
        <Titles>Nivel de ingles</Titles>
            <Paragraphs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui modi eos! Vero molestias maiores voluptates quis sed aspernatur quos, ducimus, modi ab fugit asperiores tenetur debitis, fugiat obcaecati! Quibusdam?
            </Paragraphs>
        </TextInfo>
        </div>

        
    </div>
    </>
  )
}

