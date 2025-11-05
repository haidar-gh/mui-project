import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/user/usersSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import stepReducer from '../features/step/stepsSlice'

const persistConfig = {
    key: 'users',
    storage,
    blacklist: ['steps']
    
};
const rootReducer = combineReducers({
    user: usersReducer,
    steps: stepReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export const persistStor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch