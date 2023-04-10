import {createStore} from 'redux';
import {rootReducer} from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// not to production
export const store = createStore(
	persistedReducer,
);

export const persistor = persistStore(store);