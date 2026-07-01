import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { useNavigate } from "react-router";

function Search(props) {
  const { close } = props;
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  function handleSubmit (e){
    e.preventDefault()
    if(value?.trim()) navigate(`/search/${value?.replaceAll(" ", '-')}`)
    setValue("")
  }
  return (
    <form 
      onSubmit={(e) => handleSubmit(e)}
      className="relative w-9/10 flex items-center justify-end transition-all duration-500">
      <input
        type="text"
        value={value}
        autoFocus
        onChange={(e) => setValue(e?.target?.value)}
        placeholder="movie search"
        className="text-white pl-2 py-1 border border-slate-700 focus:border-slate-500 bg-gray-900 outline-none rounded-md w-full h-8"
      />
      <button
        type="button"
        onClick={() => close(false)}
        className="text-slate-400 hover:text-slate-100 text-2xl absolute right-1 top-0 bottom-0 cursor-pointer transition-all duration-200"
      >
        <VscClose />
      </button>
    </form>
  );
}

export default Search;
