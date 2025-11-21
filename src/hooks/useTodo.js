import { useContext } from "react";
import TodoContext from "../context/todoContext";

function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Error: useTodo must be used within a TodoProvider!");
  }
  return context;
}

export default useTodo;
