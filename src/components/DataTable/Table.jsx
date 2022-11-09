import './dataTable.css'
import { FaEye, FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ddd;
`
const HeaderLabel = styled.th`
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  font-family: "DM sans", "sans-serif";
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
  `

const Table = (props) => {
  const { columns, rows, path, hoverable } = props;

  console.log(rows);

  if(rows?.length >= 1){
    return (
      <Container>
        <table className='data-table'>
          <thead>
            <tr>
              {columns.map((column, index) => 
                <HeaderLabel key={index}>{column.headerLabel}</HeaderLabel>
              )}
              <HeaderLabel>Action</HeaderLabel>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => <TableRow key={index} row={row} columns={columns} path={path} hoverable={hoverable} />)}
            
          </tbody>
        </table>
      </Container>
    )
  }else{
    return (
      <p className='no-data-message'>No data to display!</p>
    )
  }

  
}

const TableHeadItem = ({item}) => <tr>{item.headerLabel}</tr>

const TableRow = ({row, columns, path, hoverable}) => {
  const navigate = useNavigate();
  let now = new Date();
  let created_at = new Date(row.created_at);
  let isNew = (now - created_at)/1000/60 < 5;

  return (
    <tr className={`data-row ${isNew ? 'new' : ''}`}>
      {columns.map((columnItem, index) => {
        return(
          
          <td key={index}>
            {row[`${columnItem.value}`]}
          </td>
        ) 
      })}
      <td>
        <button
          className='hover:text-cyan-400 text-sm p-3'
          onClick={() => {navigate(`${path}/show/${row.id}`)}}
        >
          <FaEye />
        </button>        

        <button
          className='hover:text-cyan-400 text-sm p-3'
          onClick={() => {navigate(`${path}/edit/${row.id}`)}}
        >
          <FaEdit />
        </button>
      </td>
      
    </tr>
  )
}

export default Table