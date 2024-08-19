import React from "react";
import { MdClose } from "react-icons/md";


const TodosList = ({ handleDeleteTodos, list, handleTodoComplited }) => {
  return (

    <div>
      {list.map((todo) => (
        <div key={todo.id} className="todos_container">
          <input
          className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={()=> handleTodoComplited(todo.id)}
          />
          <p className="text">{todo.description}</p>
          <button onClick={() => handleDeleteTodos(todo.id)} className="btn_delete">
            <MdClose size={24} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
