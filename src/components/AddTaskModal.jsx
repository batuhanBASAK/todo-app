import { useState } from 'react'
import { nanoid } from "nanoid";
import useTodo from "../hooks/useTodo";
import Modal from './ui/Modal';
import Button from './ui/Button';


function AddTaskModal({ openAddNewTaskModal, setOpenNewTaskModal }) {
  const { todoList, setTodoList } = useTodo();
  const emptyNewTask = { title: "", description: "" };
  const [newTask, setNewTask] = useState(emptyNewTask);

  const handleAddingNewTask = (e) => {
    e.preventDefault();
    const newTodo = { ...newTask, id: nanoid() }
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setNewTask(emptyNewTask);
    setOpenNewTaskModal(false);
  }

  return (
    <Modal open={openAddNewTaskModal}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <form className='w-full flex flex-col gap-4' onSubmit={handleAddingNewTask}>
            <h1 className='text-2xl font-semibold text-center'>Add New Task</h1>
            <label className='w-full h-12 bg-slate-200'>
              <input
                type="text"
                className='w-full h-full rounded bg-white border-2 px-2 py-1 text-sm'
                placeholder='Title'
                value={newTask.title}
                onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </label>

            <label className='w-full h-12 bg-slate-200'>
              <input
                type="text"
                className='w-full h-full rounded bg-white border-2 px-2 py-1 text-sm'
                placeholder='Description'
                value={newTask.description}
                onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </label>

            <div className='flex gap-2 mr-0 ml-auto'>
              <Button
                variant="ghost"
                onClick={() => setOpenNewTaskModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary">Add Task</Button>
            </div>
          </form>

        </Modal.Content>
      </Modal.Portal>
    </Modal>
  )


}

export default AddTaskModal