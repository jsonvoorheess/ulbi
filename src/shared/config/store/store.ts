import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "entities/Counter/model/CounterSlice"

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    },
    devTools: __IS_DEV__,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch