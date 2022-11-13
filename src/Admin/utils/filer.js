const [query, setQuery] = useState('')
const keys = ['name', 'file_id']

const search = (data, keys) => {
  return data.filter(
    (item) => 
      keys.some(key => item[key].toLowerCase().includes(query))

      
    // item.name.toLowerCase().includes(query) ||
    // item.file_id.toLowerCase().includes(query) 
    )
}