import {createSlice} from '@reduxjs/toolkit'


  const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
      user:{}
    },
    reducers: {
      setUserInformation: (state, action)=>{
        state.user = action.payload
      }
    }
  })


export const {setUserInformation} = UserSlice.actions
export default UserSlice.reducer