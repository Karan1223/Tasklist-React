import { useState } from "react"

type searchProps = 
{
    onSearch: (title: string) => void
}

const Search = ({onSearch}: searchProps) => {
    const [search, setSearch] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        setSearch(e.target.value)
        onSearch(e.target.value)
    }

  return (
    <div>
        <form className='add-form'>
            <label>Search Tasks: </label>
            <input type="text" value={search} onChange={handleChange}
               placeholder='Enter Title or Tasks'/>
        </form>
    </div>
  )
}

export default Search