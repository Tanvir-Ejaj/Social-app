import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loggedInUsers: (state, action) => {
      state.userInfo = action.payload;
    },
    logOutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loggedInUsers, logOutUser } = userSlice.actions;

export default userSlice.reducer;
