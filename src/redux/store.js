import thunkMiddlleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware,compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();
const composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
  rootReducer,
  composeEnhances(applyMiddleware(thunkMiddlleware, loggerMiddleware))
);

let persistor = persistStore(store);

export { store, persistor };
