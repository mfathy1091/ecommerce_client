import React from 'react'

const PageHeader = ({ category, title }) => {
  return (
    <div className='m-5 '>
      <p className='text-neutral-400'>{category}</p>
      <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-neutral-200'>
        {title}
      </p>
    </div>
  )
}

export default PageHeader