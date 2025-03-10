import React, { Children } from 'react'

export const TextInfo = ({children}) => {
  return (
    <>
    <div className="border-4 max-w-200 text-center rounded-2xl p-10">
      {children}
    </div>
    </>
  )
}
