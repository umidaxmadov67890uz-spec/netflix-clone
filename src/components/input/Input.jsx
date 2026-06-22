function Input(props) {
  const {label, error, setError, onChange, ...input} = props

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
          className="w-full text-white text-xl outline-none border border-slate-700 focus:border-red-600 ring ring-slate-700 focus:ring-red-600 rounded-lg p-3"
        />
        {error && <p className="text-red-500 mt-1 text-sm">parol kamida 8 ta belgidan kam bolmasligi kerak</p>}
    </div>
  )
}

export default Input
