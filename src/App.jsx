import { useState } from "react";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import TodoTab from "./components/TodoTab";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <Header setOpenSidebar={setOpenSidebar} />
      <div className="flex flex-col md:flex-row">
        <Sidebar open={openSidebar} setOpenSidebar={setOpenSidebar} />
        <TodoTab />
      </div>
    </div>
  )
}

export default App