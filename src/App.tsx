import React, { useState } from 'react';
import './style/app.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from './components/InputForm'
//import { Todo } from './model';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TotalTodo from './components/TotalTodo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const dispatch = useDispatch()

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    dispatch(addTodo({
      todo:todo.trim(),
    }))
  }

  return (
    <div className='app pt-5 container d-flex flex-column align-items-center'>
      <p className='text-center h1 mb-3'>My Todo List</p>
      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList/>
      <TotalTodo/>
    </div>

  );
}

export default App;
