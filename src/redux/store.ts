import { configureStore } from '@reduxjs/toolkit'
import btnReducer from './btnsSlice'
export const store = configureStore({
    reducer: {
        btns: btnReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch