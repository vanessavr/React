import { configureStore } from '@reduxjs/toolkit'

import savedUsersReducer from './savedUsersSlice'
import usersListReducer from './usersListSlice'

export default configureStore({
  reducer: {
    savedUsers: savedUsersReducer, 
    usersList: usersListReducer, 
  },
})