import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './modeSlice'

// Redux store
const store = configureStore({
    reducer: {
        mode: modeReducer
    }
})

export default store