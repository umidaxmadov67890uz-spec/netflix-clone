function Input(props) {
  const {label, error, setError, onChange, errorText, ...input} = props

  function handleInvalid(e) {
    e.preventDefault()
    setError(true)
  }
  
  return (
    <div className="w-full flex flex-col">
        <label 
          htmlFor={label}
          className="text-white my-2"
        >{label}</label>
        <input 
          {...input}
          onInvalid={(e) => handleInvalid(e)}
          onChange={(e) => onChange(e)}
          className="w-full text-white text-xl outline-none border border-[#a0a0a0] focus:border-red-600 ring ring-slate-700 focus:ring-red-600 rounded-lg p-3"
        />
        {error && <p className="text-red-500 mt-1 text-sm">{errorText}</p>}
    </div>
  )
}

export default Input
