import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { contactsReducer, filterReducer, loading } from "./reducers"

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
})
const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export default store
