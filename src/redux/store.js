import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";

const store = createStore (
  rootReducer,
  applyMiddleware(
    promise,
    logger, // logger must be bellow
  )
)

export default store