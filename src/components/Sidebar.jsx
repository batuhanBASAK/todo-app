import TodoFiltersBar from './TodoFiltersBar'
import TodoList from './TodoList'

function Sidebar({ open, setOpenSidebar }) {
  const classes = `${open ? "block" : "hidden"} md:block bg-white border-r h-[calc(100vh-48px)] fixed md:static top-12 left-0 w-screen md:w-64 z-10`;

  return (
    <aside className={classes}>
      <TodoFiltersBar />
      <TodoList setOpenSidebar={setOpenSidebar} />
    </aside>
  )
}

export default Sidebar