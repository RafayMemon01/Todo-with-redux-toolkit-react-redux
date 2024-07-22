import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="p-6 bg-gray-100">
      <form onSubmit={handleAddTodo} className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Add todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded p-2 flex-grow mr-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
