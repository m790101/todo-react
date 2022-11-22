import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer:{
        todos:todoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

/*export default configureStore({
    reducer:{
        todos:todoSlice.reducer
    }
})*/

export default store