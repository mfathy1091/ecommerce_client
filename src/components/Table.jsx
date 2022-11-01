import './table.css'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Table = ({columns, data, path}) => {
  
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item, index) => <th key={index}>{item.headerText}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => <TableRow key={index} item={item} columns={columns} path={path} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({item}) => <tr>{item.headerText}</tr>

const TableRow = ({item, columns, path}) => {
  const navigate = useNavigate();
  return (
    <tr>
      {columns.map((columnItem, index) => {
        return <td key={index}>{item[`${columnItem.value}`]}</td>
      })}
      <td>
        <button
          className='hover:text-cyan-400 text-sm p-3'
          onClick={() => {navigate(`${path}/${item.id}`)}}
        >
          <FaEye />
        </button>
        
      </td>
    </tr>
  )
}

export default Table