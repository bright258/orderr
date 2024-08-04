import {createSlice} from '@reduxjs/toolkit'


  const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
      user:{},
      isLoggedIn: false,
      userDetails: {}
    },
    reducers: {
      setUserInformation: (state, action)=>{
        state.user = action.payload
      },
      setUserLoggedIn: (state, action)=>{
        state.isLoggedIn = action.payload
      },
      setUserDetails: (state, action)=>{
        state.userDetails = action.payload
      }
    }
  })


export const {setUserInformation, setUserLoggedIn, setUserDetails} = UserSlice.actions
export default UserSlice.reducer