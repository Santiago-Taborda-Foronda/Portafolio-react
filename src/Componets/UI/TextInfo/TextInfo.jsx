import React, { Children } from 'react'

export const TextInfo = ({children}) => {
  return (
    <>
    <div className="sm:max-w-100 md:min-w-150 md:mt-20 sm:mt-10 lg:min-w-200 max-w-200 m-5  text-center rounded-2xl p-10 bg-black/40 border border-white/10 sm:shadow-xl sm:transition-all sm:duration-500 sm:ease-in-out sm:hover:shadow-2xl sm:hover:scale-105 custom-shadow">
      {children}
    </div>
    </>
  )
}
