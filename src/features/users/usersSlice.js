import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { value: [] },
  reducers: {
    add(state, action) {
      state.value.push(action.payload);
    }
  }
});

export const { add } = usersSlice.actions;
export default usersSlice.reducer;