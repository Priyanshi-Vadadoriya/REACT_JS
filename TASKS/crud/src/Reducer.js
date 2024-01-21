import { createSlice } from "@reduxjs/toolkit";
import { Userdata } from "./Data";

const userslice = createSlice({
    name:"priyanshi",
    initialState:Userdata,
    reducers:{
        adduser:(state,action)=>{
            //console.log(action)
           // console.log(action.payload)
            state.push(action.payload)
        },
        edituser:(state,action)=>{
            //console.log(action)
           //console.log(action.payload)
           //console.log(state)
            const {id,name,email} = action.payload;
            //console.log(id)
            const userId = state.find((user)=>
            user.id == id
            )
            //console.log(userId)
            if(userId)
            {
                userId.name = name
                userId.email = email
            }
        },
        deleteuser:(state,action)=>{
            //console.log(action)
           //console.log(action.payload)
            const {id} = action.payload;
            //console.log(id)
            const userId = state.find((user)=>
            user.id == id
            )
            //console.log(userId)
            if(userId)
            {
                return state.filter((user)=>user.id !== id)
            }
        }
    }
})

export const {adduser,edituser,deleteuser} = userslice.actions;
export default userslice.reducer;