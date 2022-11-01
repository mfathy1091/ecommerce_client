import React from 'react'

const Container = ({children}) => {
  return (
    <div className="m-4 p-5 bg-white rounded-sm mb-3 shadow dark:bg-secondary-dark-bg dark:text-neutral-200">
      {children}
    </div>
  )
}

export default Container