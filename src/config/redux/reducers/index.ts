import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import Registration from "./Auth/Registration";
import AsyncStorage from '@react-native-async-storage/async-storage';

//reducers with redux persist

const rootPersistConfig = {
    key: 'root',
    storage:AsyncStorage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ["registration"],
}


export const reducers = combineReducers({
    registration:Registration,



  });


  export default persistReducer(rootPersistConfig, reducers)