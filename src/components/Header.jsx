import { CirclePlus, ListTodo, SquareMenu } from 'lucide-react'
import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import Button from './ui/Button';

function Brand() {
  return (
    <div className='flex gap-1 items-center'>
      <ListTodo className='size-6' />
      <p className='font-extrabold'>Todo App</p>
    </div>
  )
}


function Nav({ setOpenSidebar }) {
  const [openAddNewTaskModal, setOpenNewTaskModal] = useState(false);


  const handleAddingNewTask = () => {
    setOpenNewTaskModal(true);
  };

  return (
    <nav className='flex items-center gap-4'>
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={handleAddingNewTask}
      >
        <CirclePlus className='size-6' />
        <span className='hidden md:inline-block'>Add new task</span>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-2 md:hidden"
        onClick={() => setOpenSidebar(prev => !prev)}
      >
        <SquareMenu className='size-6' />
      </Button>

      <AddTaskModal
        openAddNewTaskModal={openAddNewTaskModal}
        setOpenNewTaskModal={setOpenNewTaskModal}
      />
    </nav>
  )
}


function Header({ setOpenSidebar }) {
  return (
    <header className='h-12 flex justify-between px-4 border-b z-10'>
      <Brand />
      <Nav setOpenSidebar={setOpenSidebar} />
    </header>
  )
}

export default Header