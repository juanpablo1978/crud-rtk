import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1",
     title: "Task 1",
      completed: false,
       description: "My task 1" },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "My task 2",
  },
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action)=>{
        state.push(action.payload)
    },
    deleteTask: (state, action)=> {
      const taskFound = state.find((task) => task.id === action.payload) 
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    }
  },
});

export default userSlice.reducer;
export const {addTask, deleteTask} = userSlice.actions
