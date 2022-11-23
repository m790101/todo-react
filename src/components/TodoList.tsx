import React from 'react'
import { useSelector } from 'react-redux'
import '../style/todo-list.scss'
import Todo from './Todo'
import {RootState} from '../store/store'
import { TodoInterface } from '../model'

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos)
  return (
    <div className='todo-list gap-3'>
      {todos.map((todo:TodoInterface) => {
        return <Todo key={todo.id} todo={todo.todo} isDone={todo.isDone} id={todo.id} isEdited={todo.isEdited}/>
      })}
    </div>
  )
}

export default TodoList
