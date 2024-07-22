import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const AllTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  // Local state to handle which todo is being updated
  const [updateState, setUpdateState] = useState({ isUpdate: false, todoId: null, input: '' });

  const handleUpdate = (todo) => {
    setUpdateState({ isUpdate: true, todoId: todo.id, input: todo.text });
  };

  const handleChange = (e) => {
    setUpdateState({ ...updateState, input: e.target.value });
  };

  const handleSubmit = (e, todo) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, text: updateState.input }));
    setUpdateState({ isUpdate: false, todoId: null, input: '' });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-white p-4 rounded shadow mb-4">
          {updateState.isUpdate && updateState.todoId === todo.id ? (
            <form onSubmit={(e) => handleSubmit(e, todo)} className="flex items-center">
              <input
                type="text"
                value={updateState.input}
                onChange={handleChange}
                className="border rounded p-2 mr-2 flex-grow"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </form>
          ) : (
            <div className="flex items-center justify-between">
              <h3 className="text-lg">{todo.text}</h3>
              <div>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleUpdate(todo)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllTodo;
