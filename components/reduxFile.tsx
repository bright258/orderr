import {createSlice} from '@reduxjs/toolkit'


  const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
      user:{},
      isLoggedIn: false
    },
    reducers: {
      setUserInformation: (state, action)=>{
        state.user = action.payload
      },
      setUserLoggedIn: (state, action)=>{
        state.isLoggedIn = action.payload
      }
    }
  })


export const {setUserInformation, setUserLoggedIn} = UserSlice.actions
export default UserSlice.reducer