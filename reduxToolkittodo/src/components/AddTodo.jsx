import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    let id = document.getElementById("update-btn").getAttribute("data-id");
    if (document.getElementById("add-btn").classList.contains("hidden"))
      dispatch(updateTodo({ id: id, text: input }));
    else dispatch(addTodo(input));
    setInput("");
    document.getElementById("update-btn").classList.add("hidden");
    document.getElementById("add-btn").classList.remove("hidden");
    document
      .getElementById("input")
      .setAttribute("placeholder", "Enter a Todo...");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        id="input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        id="add-btn"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
      <button
        type="submit"
        id="update-btn"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg hidden"
      >
        Update Todo
      </button>
    </form>
  );
}

export default AddTodo;
