import React, { useEffect, useState } from 'react'
import TodosForm from '../../components/TodosForm/TodosForm';
import TodosList from '../../components/TodosList/TodosList'
import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {
  const [todos, setTodos] = useState(() =>   JSON.parse(localStorage.getItem("todos")) || [
    { id: "id-1", description: "Learn HTML and CSS", completed : false },
    { id: "id-2", description : "Get good at JavaScript", completed : false },
    { id: "id-3", description: "Master React", completed : false },
  ]);

  useEffect (()=>{
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleAddTodos(text){
const todo = {
  description: text,
  id: Math.random() * 100,
  completed : false,
}
setTodos([...todos,todo]);
  }


  function handleDeleteTodos(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
}


function handleTodoComplited(todoId){
  setTodos(todos.map((todo) => {
    if (todo.id !== todoId) {
      return todo;
    }
    return  {...todo, completed: !todo.completed};
  }));
}

  return (
    <div>
   <TodosForm handleAddTodos={handleAddTodos}/>
   <ErrorBoundary>
       <TodosList list={todos} handleDeleteTodos={handleDeleteTodos} handleTodoComplited={handleTodoComplited}/>
   </ErrorBoundary>

    </div>
  )
}

export default Home
