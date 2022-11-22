import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleDone, deleteTodo,toggleIsEdited,updateTodo } from '../store/todoSlice'
import '../style/todo.scss'
import {AiFillDelete} from 'react-icons/ai'
import {MdDone,MdOutlineModeEditOutline} from 'react-icons/md'

interface Props {
    id: number,
    todo: string,
    isDone: boolean,
    isEdited:boolean
}

const Todo: React.FC<Props> = ({ id, todo, isDone,isEdited }) => {
    const [editedTodo,setEditedTodo] = useState<string>(todo)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodo({
            id
        }))
    }
    const handleIsDone = ()=>{
    dispatch(toggleDone({id,isDone:!isDone}))
  }
  const handleIsEdited = ()=>{
    dispatch(toggleIsEdited({id,isEdited:!isEdited}))
  }

  const handleEdit = (todo:string)=>{
    dispatch(updateTodo({id,todo}))
    dispatch(toggleIsEdited({id,isEdited:!isEdited}))
  }
  let cross = {
      textDecoration:isDone?'line-through':'',
  }
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputRef.current?.focus()
  },[isEdited])
    return (
        <div className='d-flex align-items-center mb-3 todo-list__panel justify-content-between'>
            {isEdited?
            <div className="edit-section">
                <input type="text" ref={inputRef} value={editedTodo} onChange={(e) => { setEditedTodo(e.target.value) }}/>
                <img src="https://i.imgur.com/efx42hL.png" alt="" className='close' onClick={handleIsEdited}/>
            </div>:
            <div className='d-flex '>
                <input type="checkbox" className='me-3 coursor' onChange={handleIsDone} checked={isDone}/>
                <li className='fs-3' style={cross}>{todo} </li>
            </div>}
            <div className='d-flex gap-2'>
                {!isEdited && <button className='btn btn-info fs-4' onClick={handleIsEdited}><MdOutlineModeEditOutline/></button>}
                {isEdited &&<button className='btn btn-warning fs-5' onClick={()=>handleEdit(editedTodo)}><MdDone/></button>}
                <button className='btn btn-danger fs-5' onClick={handleDelete}><AiFillDelete/></button>
            </div>
        </div>
    )
}

export default Todo
