import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from 'types/Task';

interface TasksAppState {
  taskList: Task[];
  isLoading: boolean;
}

const initialState: TasksAppState = {
  taskList: [],
  isLoading: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(previousState, action: PayloadAction<Task>) {
      previousState.taskList.push(action.payload);
    },
    deleteTask(previousState, action: PayloadAction<number>) {
      previousState.taskList = previousState.taskList.filter((task) => task.id !== action.payload);
    },
    editTask(previousState, action: PayloadAction<Task>) {
      const taskIndex = previousState.taskList.findIndex((task) => task.id === action.payload.id);
      if (taskIndex === -1) return;

      previousState.taskList[taskIndex] = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, deleteTask, editTask } = tasksSlice.actions;
