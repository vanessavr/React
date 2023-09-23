import { createSlice } from '@reduxjs/toolkit'

export const usersListSlice = createSlice({
  name: 'users',
  initialState: {
    value: [], 
  },
  reducers: {
    populateList: (state, user) => { 
      state.value.push(user.payload) 
    },
  },
})

export const { populateList } = usersListSlice.actions 
export default usersListSlice.reducer 