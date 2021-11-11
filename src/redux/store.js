import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducer
import cartRedux from './cartRedux';
import productsRedux from './productsRedux';
import userRedux from './userRedux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducers = combineReducers({
    products: productsRedux,
    cart: cartRedux,
    user: userRedux,
})
  
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store =  configureStore({
    reducer: persistedReducer,
    // below this is for persistedReducer not for noraml one
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
