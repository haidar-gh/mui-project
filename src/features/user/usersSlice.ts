import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction} from '@reduxjs/toolkit'

export interface User {
  fullname: string;
  email: string;
  password: string;
  islogin: boolean;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    {
      fullname: "haidargharavi",
      email: "haidar@gmail.com",
      password: "12345678",
      islogin: false,
    },
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload); // payload یک User است
    },
    loginUser: (state, action: PayloadAction<string>) => {
      
      const emailToLogin = action.payload

      state.users.forEach(user => {
        user.islogin = user.email === emailToLogin
      })
    },
    logoutUser: (state, action: PayloadAction<string>) => {

      const emailToLogout = action.payload

      const user = state.users.find(u => u.email === emailToLogout)
      if (user) user.islogin = false
    },
  },
});

export const { addUser, loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
export type { UsersState };
