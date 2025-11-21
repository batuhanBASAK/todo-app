import { CircleCheckBig, Trash } from 'lucide-react'
import React, { useState } from 'react'
import Button from './ui/Button'
import DeleteTaskModal from './DeleteTaskModal'
import useTodo from '../hooks/useTodo';

function CompletedButton({ todo }) {
  const { currentTodo, setCurrentTodo, todoList, setTodoList } = useTodo();

  const handleCompletedButtonClick = () => {
    const completed = currentTodo.completed;
    const newCurrentTodo = { ...currentTodo, completed: !completed };

    // remove the older currentTodo from todoList
    const tmpTodoList = todoList.filter(todo => todo.id !== currentTodo.id);
    // update the currentTodo
    setCurrentTodo(newCurrentTodo);
    // add updated version of it to todoList
    setTodoList([newCurrentTodo, ...tmpTodoList]);
  }

  return (
    <Button
      variant={currentTodo.completed ? "success" : "dark"}
      className="flex items-center gap-1"
      onClick={handleCompletedButtonClick}
    >
      <CircleCheckBig className='size-6' />
      <span className='hidden md:inline-block'>
        {todo.completed ? "Completed" : "Not Completed Yet"}
      </span>
    </Button>
  )

}


function DeleteButton({ setDeleteModalOpen }) {

  const handleDeleteButtonClick = () => {
    setDeleteModalOpen(true);
  }

  return (
    <Button
      variant="danger"
      className="flex items-center gap-1"
      onClick={handleDeleteButtonClick}
    >
      <Trash className='size-6' />
      <span className='hidden md:inline-block'>Delete Task</span>

    </Button>
  )
}



function TodoTabActionList({ todo }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className='flex gap-4'>
      <CompletedButton todo={todo} />
      <DeleteButton setDeleteModalOpen={setDeleteModalOpen} />
      <DeleteTaskModal open={deleteModalOpen} setOpen={setDeleteModalOpen} />
    </div>
  )
}

export default TodoTabActionList