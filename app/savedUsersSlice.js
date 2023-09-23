import { createSlice } from '@reduxjs/toolkit'

export const savedUsersSlice = createSlice({
  name: 'savedUsers',
  initialState: {
    value: [], 
  },
  reducers: {
    insert: (state, user) => { 
      state.value.push(user.payload) 
    },
  },
})

export const { insert } = savedUsersSlice.actions 

export default savedUsersSlice.reducer 