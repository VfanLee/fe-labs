import { configureStore } from '@reduxjs/toolkit'
import counter from './modules/counter'

const store = configureStore({
  reducer: {
    counter,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export default store
