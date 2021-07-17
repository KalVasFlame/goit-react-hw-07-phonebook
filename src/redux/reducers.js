import { combineReducers, createReducer } from "@reduxjs/toolkit"
import * as actions from "./actions"

export const contactsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (state, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

export const filterReducer = createReducer("", {
  [actions.filter]: (state, { payload }) => payload,
})

export const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
})

export default combineReducers({
  contactsReducer,
  filterReducer,
  loading,
})
