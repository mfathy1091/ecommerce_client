import './formInput.css'

const FormInput = (props) => {
  const {name, type, placeholder, value, onChange, label,errorMessage, ...inputProps} = props
  return (
    <div className='flex flex-col mb-3'>
      <label className='mb-2 mt-4 text-sm font-bold text-slate-900'>{label}</label>
      <input 
        className='px-4 py-2 rounded-md border-gray-500 border'
        name={name} type={type} placeholder={placeholder} value={props.value}
        onChange={onChange} {...inputProps}
      />
      <span className='hidden p-0.5 text-xs text-red-600'>{errorMessage}</span>
    </div>
  )
}

export default FormInput;