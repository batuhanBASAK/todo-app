import React from 'react'
import Modal from "./ui/Modal";
import Button from './ui/Button';
import useTodo from "../hooks/useTodo";

function DeleteTaskModal({ open, setOpen }) {
  const { todoList, setTodoList, currentTodo, setCurrentTodo, setFilteredTodoList } = useTodo();
  const handleDeletingTask = () => {
    const newTodoList = todoList.filter(todo => todo.id !== currentTodo.id);
    setTodoList(newTodoList);
    setCurrentTodo(null);
    setFilteredTodoList(newTodoList);
    setOpen(false);
  }

  return (
    <Modal open={open}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold text-center'>Are you sure?</h1>
            <p className='text-center'>If you continue, you will remove this task permanently!</p>
            <div className='flex gap-2 items-center mr-0 ml-auto'>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={handleDeletingTask}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  )
}

export default DeleteTaskModal