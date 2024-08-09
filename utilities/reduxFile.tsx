import {createSlice} from '@reduxjs/toolkit'


  const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
      user:{},
      isLoggedIn: false,
      userDetails: {}
    },
    reducers: {
      
      setUserLoggedIn: (state, action)=>{
        state.isLoggedIn = action.payload
      },
      setUserDetails: (state, action)=>{
        state.userDetails = action.payload
      }
    }
  })


export const {setUserLoggedIn, setUserDetails} = UserSlice.actions
export default UserSlice.reducer