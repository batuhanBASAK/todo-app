import { useEffect, useState } from 'react'
import TodoContext from '../context/todoContext';


function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodoInitially = async () => {
      const storedTodoListInString = localStorage.getItem("todoList");
      if (storedTodoListInString) {
        setTodoList(JSON.parse(storedTodoListInString));
      }
      setLoading(false);
    }
    getTodoInitially();
  }, []);


  useEffect(() => {
    if (loading) {
      return;
    }
    const handleTodoListChange = () => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    handleTodoListChange();
  }, [todoList]);


  useEffect(() => {
    const handleFilteredTodoListChange = () => {
      const newTodoList = todoList.filter(todo => todo.title.toLowerCase().indexOf(filterText) !== -1);
      setFilteredTodoList(newTodoList);
    }
    handleFilteredTodoListChange();
  }, [filterText, todoList]);


  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        currentTodo,
        setCurrentTodo,
        filteredTodoList,
        setFilteredTodoList,
        filterText,
        setFilterText
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider