import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './reducers/CardFilter'

const store = configureStore({
  reducer: {
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
