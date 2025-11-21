import React from 'react'
import TodoTabActionList from './TodoTabActionList'
import useTodo from "../hooks/useTodo";

function TodoTab() {

  const { currentTodo } = useTodo();
  const tabClasses = "flex flex-col gap-4 p-4 bg-neutral-100 flex-1 h-[100vh-48px] overflow-y-scroll"

  return (
    currentTodo ? (
      <main className={tabClasses}>
        <TodoTabActionList todo={currentTodo} />
        <h1 className='text-2xl font-semibold'>{currentTodo.title}</h1>
        <p>{currentTodo.description}</p>
      </main>
    ) : (
      <main className={tabClasses}>
        <h1 className='text-lg font-semibold text-black/80'>Pick a task from sidebar to display it in here!</h1>
      </main>
    )
  )
}

export default TodoTab