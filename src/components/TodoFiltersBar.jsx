import { Search } from 'lucide-react'
import useTodo from "../hooks/useTodo";

function TodoFiltersBar() {
  const { filterText, setFilterText } = useTodo();

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  }


  return (
    <form className='p-4 w-full h-18 z-20 bg-white'>
      <label className='inline-block relative w-full'>
        <input
          type="text"
          placeholder='Search...'
          className='w-full py-1 px-2 border-2 rounded'
          value={filterText}
          onChange={(e) => handleFilterTextChange(e)}
        />
        <Search className='absolute top-1/2 right-4 -translate-y-1/2 size-4' />
      </label>
    </form>
  )
}

export default TodoFiltersBar