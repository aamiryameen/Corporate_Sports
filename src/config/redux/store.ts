
import { createStore, applyMiddleware } from 'redux'
import persistReducer from './reducers/index'
import { persistStore, } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'


//store initialized 

export const store = createStore(
    persistReducer,
    {},
    composeWithDevTools(applyMiddleware(ReduxThunk))
)
export const persistor = persistStore(store)