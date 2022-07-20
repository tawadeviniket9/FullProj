import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";


const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    "applicationReducer",
  ],
};

const rootReducer = combineReducers({
//   applicationReducer: applicationReducer,

});

export default persistReducer(rootPersistConfig, rootReducer);
