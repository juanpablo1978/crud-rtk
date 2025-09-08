import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/tasksSlices'



const store = configureStore({
        reducer: {
            tasks: taskReducer
        },
})

export default store