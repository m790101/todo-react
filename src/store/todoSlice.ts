import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state:any,action)=>{
            if(action.payload.todo.trim().length === 0)return 
            const newTodo = {
                id: Date.now(),
                todo: action.payload.todo,
                isDone:false,
                isEdited:false
            }
            state.push(newTodo)
        },
        toggleDone:(state:any,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].isDone = action.payload.isDone
        },
        deleteTodo:(state:any,action)=>{
           return state.filter((todo: { id: number; })=>todo.id !==action.payload.id)
        },
        toggleIsEdited:(state:any,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].isEdited = action.payload.isEdited
        },
        updateTodo:(state:any,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].todo = action.payload.todo
        }

    }
})

export const{addTodo,toggleDone,deleteTodo, toggleIsEdited,updateTodo} = todoSlice.actions

export default todoSlice