import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { value: [] },
  reducers: {
    addTask(state, action) {
      state.value.push(action.payload);
    },
    removeTask(state, action) {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    updateTask(state, action) {
      state.value = state.value.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      })
    }
  }
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;