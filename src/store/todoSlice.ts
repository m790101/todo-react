import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {id:1,todo:'todo1',isDone:false,isEdited:false},
        {id:2,todo:'todo2',isDone:false,isEdited:false},
        {id:3,todo:'todo3',isDone:true,isEdited:false}
    ],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id: Date.now(),
                todo: action.payload.todo,
                isDone:false,
                isEdited:false
            }
            state.push(newTodo)
        },
        toggleDone:(state,action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id)
            state[index].isDone = action.payload.isDone
        },
        deleteTodo:(state,action)=>{
           return state.filter((todo)=>todo.id !==action.payload.id)
        },
        toggleIsEdited:(state,action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id)
            state[index].isEdited = action.payload.isEdited
        },
        updateTodo:(state,action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id)
            state[index].todo = action.payload.todo
        }

    }
})

export const{addTodo,toggleDone,deleteTodo, toggleIsEdited,updateTodo} = todoSlice.actions

export default todoSlice