import React from 'react'
import { useSelector } from 'react-redux'
import {RootState} from '../store/store'

const TotalTodo:React.FC = () => {
    const doneTodo = useSelector((state:RootState)=>state.todos.filter((todo: { isDone: boolean })=>todo.isDone))
  return (
    <div>
      <h3>Total Completed Item:{doneTodo.length}</h3>
    </div>
  )
}

export default TotalTodo
