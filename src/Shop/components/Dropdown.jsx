import { ListItemSecondaryAction } from '@material-ui/core';
import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './dropdown.css'

const Container = styled.div`

`


const Dropdown = ({items}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {items.map((item, i) => {
          return (
            <li key={i}>
            <Link 
              className='dropdown-link' to={item.url} 
              onClick={() => setClick(false)}
            >
              {item.label}
            </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown