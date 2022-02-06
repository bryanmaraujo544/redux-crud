import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { value: [] },
  reducers: {
    addUser(state, action) {
      state.value.push(action.payload);
    },
    removeUser(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },

  }
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;