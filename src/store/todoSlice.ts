import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../model";
const initialState:TodoInterface[] = []

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action):void=>{
            if(action.payload.todo.trim().length === 0)return 
            const newTodo:TodoInterface = {
                id: Date.now(),
                todo: action.payload.todo,
                isDone:false,
                isEdited:false
            }
            state.push(newTodo)
        },
        toggleDone:(state,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].isDone = action.payload.isDone
        },
        deleteTodo:(state,action)=>{
           return state.filter((todo: { id: number; })=>todo.id !== action.payload.id)
        },
        toggleIsEdited:(state,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].isEdited = action.payload.isEdited
        },
        updateTodo:(state,action)=>{
            const index = state.findIndex((todo: { id: number; })=> todo.id === action.payload.id)
            state[index].todo = action.payload.todo
        }

    }
})

export const{addTodo,toggleDone,deleteTodo, toggleIsEdited,updateTodo} = todoSlice.actions

export default todoSlice