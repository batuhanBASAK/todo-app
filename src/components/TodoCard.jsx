import React from 'react'


function shortenText(text, limit) {
  let textShortened = text.slice(0, limit);
  if (text.length > limit) {
    textShortened = textShortened + "...";
  }
  return textShortened;
}


function TodoCard({ todo }) {
  return (
    <div className='flex flex-col items-center md:items-start gap-1'>
      <p className='text-sm font-bold'>{shortenText(todo.title, 20)}</p>
      <p className='hidden md:block text-xs text-black/80'>{shortenText(todo.description, 30)}</p>
    </div>
  )
}

export default TodoCard