
import TodoCard from './TodoCard'
import useTodo from "../hooks/useTodo";
import Button from './ui/Button';

function TodoList({ setOpenSidebar }) {
  const { setCurrentTodo, filteredTodoList } = useTodo();

  const handleCurrentTodoChange = (newTodo) => {
    setCurrentTodo(newTodo);
    setOpenSidebar(false);
  }

  if (filteredTodoList.length === 0) {
    return <div className='p-4 font-semibold'>There is no task!</div>
  }

  return (
    <ul className='flex flex-col items-start h-[calc(100vh-120px)] overflow-y-scroll'>
      {filteredTodoList.map(todo => (
        <li
          key={todo.id}
          className='block w-full'
        >
          <Button
            variant="ghost"
            className="text-sm font-semibold w-full text-center md:text-start"
            onClick={() => handleCurrentTodoChange(todo)}
          >
            <TodoCard todo={todo} />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList