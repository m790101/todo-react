import React, { useRef } from 'react'
import '../style/input-form.scss'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputForm: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input d-flex justify-content-center' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
      setTodo('')
    }}>
      <input type="input"
        placeholder="what's on your mind?"
        value={todo}
        onChange={(e) => { setTodo(e.target.value) }}
        ref={inputRef}
        className='input__box' />
      <button className='input__submit btn btn-primary'>Add to list</button>
    </form>
  )
}

export default InputForm
