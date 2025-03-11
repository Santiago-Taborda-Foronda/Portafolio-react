import React, { Children } from 'react'

export const TextInfo = ({children}) => {
  return (
    <>
    <div className="sm:max-w-100 md:min-w-150 lg:min-w-200 max-w-200 text-center rounded-2xl p-10 bg-black/40 border border-white/10">
      {children}
    </div>
    </>
  )
}
