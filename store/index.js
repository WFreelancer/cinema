import {createStore} from 'redux';
import {rootReducer} from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
//   whitelist: ['search']
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
// not to production
let composeEnhancers;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
// not to production
export const store = createStore(
	persistedReducer,
	composeEnhancers // < not to production
);

export const persistor = persistStore(store);
