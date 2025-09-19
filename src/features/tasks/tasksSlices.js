import { createSlice } from "@reduxjs/toolkit";


//persistencia
const initialState = JSON.parse(localStorage.getItem("tasks")) || [
  { id: "1",
     title: "Write project documentation",
      completed: false,
       description: "Create a complete README file that includes detailed installation steps, usage examples, contribution guidelines, and troubleshooting notes. Make sure it is easy to follow for new developers and provides all the context needed to get started quickly." },
  {
    id: "2",
    title: "Fix login form validation",
    completed: false,
    description: "Review and improve the login form component by ensuring validation for empty fields, incorrect email format, and insufficient password length. Also, add user-friendly error messages and test the flow across different devices and browsers to guarantee consistency.",
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
    },
    editTask: (state, action) => {
     const {id, title, description} =  action.payload;
     const foundTask = state.find((state) => state.id === id );

     if (foundTask) {
      foundTask.title = title;
      foundTask.description = description
     }
    }
  },
});

export default userSlice.reducer;
export const {addTask, deleteTask, editTask} = userSlice.actions
