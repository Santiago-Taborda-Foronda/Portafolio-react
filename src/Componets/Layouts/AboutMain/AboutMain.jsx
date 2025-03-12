import React from 'react'
import { Titles } from '../../UI/Titles/Titles'
import { Paragraphs } from '../../UI/Paragraphs/Paragraphs'
import { Subtitle } from '../../UI/Subtitle/Subtitle'
import "./AboutMain.css"

export const AboutMain = () => {
  return (   
    <>
      <div className="flex flex-col gap-12 px-4 lg:py-0  py-10 sm:flex-col sm:gap-25 sm:ml-20 sm:mr-20 sm:mt-20 lg:flex-row lg:mx-0 max-w-screen-xl mx-auto">
        {/* Columna 1 */}
        <div className="flex flex-col gap-4 lg:gap-0 max-w-full sm:max-w-300 justify-center text-left">
          <Titles className="text-center">Habilidades técnicas</Titles>

          <Subtitle className="text-left">Frontend</Subtitle> 
          <Paragraphs>
            Me enfoco en el desarrollo frontend porque disfruto crear estilos y aplicar mi creatividad en cada proyecto. Creo firmemente que una interfaz bien diseñada marca la diferencia, ya que la primera impresión visual puede captar la atención del usuario y generar confianza. 
          </Paragraphs>

          <Subtitle>Control de versiones</Subtitle>
          <Paragraphs>
            Manejo herramientas de control de versiones como Git y GitHub, esenciales para organizar y dar seguimiento a mis proyectos. Me permiten trabajar de forma ordenada, crear historial de cambios y colaborar en equipo de manera eficiente. Son parte clave de mi flujo de trabajo.
          </Paragraphs>

          <Subtitle>Educación y liderazgo</Subtitle>
          <Paragraphs>
            Durante mi formación he desarrollado habilidades en lógica de programación, las cuales son base fundamental para resolver problemas de manera estructurada. También he tenido la oportunidad de practicar la preparación y conducción de presentaciones, lo que ha fortalecido mi capacidad para comunicar ideas de forma clara.
          </Paragraphs>

          <Subtitle>Desarrollo Web</Subtitle>
          <Paragraphs>
            He aprendido a desarrollar aplicaciones del lado del cliente, enfocándome en la estructura, el diseño y la funcionalidad del frontend. Aunque aún no tengo experiencia laboral, busco aplicar mis conocimientos en proyectos reales para seguir creciendo como desarrollador web.
          </Paragraphs>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col gap-4 lg:gap-0 max-w-full sm:max-w-300 justify-center text-left">
          <Titles className="text-center">Habilidades sociales</Titles>

          <Subtitle className="text-left">Comunicación efectiva</Subtitle> 
          <Paragraphs>
            Valoro la comunicación efectiva como una herramienta fundamental para trabajar en equipo y evitar malentendidos. Me esfuerzo por expresar mis ideas con claridad, tanto de forma verbal como escrita, y practico la escucha activa para lograr una mejor colaboración.
          </Paragraphs>         

          <Subtitle>Honestidad</Subtitle>
          <Paragraphs>
            La honestidad es uno de mis valores personales más importantes, tanto dentro como fuera del entorno académico. Siempre procuro actuar con integridad, siendo transparente en mi trabajo y mis compromisos. Considero que la confianza se construye siendo honesto en cada paso.
          </Paragraphs>

          <Subtitle>Respeto</Subtitle>
          <Paragraphs>
            El respeto es esencial en cualquier entorno, especialmente al trabajar con personas que tienen distintas ideas o formas de pensar. Me esfuerzo por mantener un trato amable y considerado, valorando las opiniones y el trabajo de los demás. Creo que un ambiente respetuoso favorece el aprendizaje.
          </Paragraphs>

          <Subtitle>Trabajo en equipo</Subtitle>
          <Paragraphs>
            El trabajo en equipo me ha permitido crecer tanto en habilidades técnicas como personales. Me gusta aportar, colaborar y aprender de otros, reconociendo que juntos se logran mejores resultados. Estoy abierto a recibir y dar retroalimentación para mejorar en cada proyecto.
          </Paragraphs>
        </div>
      </div>    
    </>
  )
}

