import React from 'react'

export const Titles = ({children, className = ""}) => {
  return (
    <h1 className={`text-4xl text-gray-300 ${className}`}> 
    {children}
    </h1>
  )
}

 
