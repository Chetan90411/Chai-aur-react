import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-zinc-600 flex flex-col items-center pt-5">
      <h1 className="text-5xl font-semibold text-white">
        Learn about redux toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
