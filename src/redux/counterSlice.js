import { createSlice } from "@reduxjs/toolkit";


const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as object
    reducers:{
      //logic to update state

      //function to increment number  
      increment:(state,action)=>{
        state.value += action.payload
      },
      decrement:(state,action)=>{
        state.value -= action.payload
      },
      reset:(state)=>{
        state.value =0
      }





    }
})
export const{increment,decrement,reset} =counterSlice.actions
//reducer is required to stre to change the state value
export default counterSlice.reducer