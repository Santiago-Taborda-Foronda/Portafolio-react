import React from 'react'

export const Paragraphs = ({children, className = ""}) => {
  return (
    <>
    <p className={`text-gray-300 text-base leading-relaxed  ${className}`}></p>
    {children}
    </>
  )
}


