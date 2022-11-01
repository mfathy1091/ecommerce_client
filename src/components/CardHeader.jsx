import React from 'react'

const CardHeader = ({ category, title }) => {
  return (
    <div>
      <div className='card-header flex justify-between mb-5'>
        <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
          Add Beneficiary
        </p>
      </div>
    </div>
  )
}

export default CardHeader