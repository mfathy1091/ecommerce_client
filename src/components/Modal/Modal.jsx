import React from 'react'
import './modal.css'

const Modal = (props) => {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <button 
          className='modal-title-close-btn'
          onClick={ () => props.isOpened(false)}
        >
          &times; 
        </button>

        <div className="modal-title">
          <h1>Are you sure?</h1>
        </div>
        <div className="modal-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas officiis harum natus deserunt vitae minima porro? Assumenda, tempora! Itaque rem blanditiis qui similique ut consequatur incidunt. Vero, necessitatibus consequatur.</p>
        </div>
        <div className="modal-footer">
          <button onClick={ () => props.isOpened(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal