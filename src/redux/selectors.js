import { createSelector } from "@reduxjs/toolkit"

export const getLoading = (state) => state.loading
export const getContacts = (state) => state.contacts
export const getFilter = (state) => state.filter

export const filteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
})

export default { getLoading, getContacts, getFilter, filteredContacts }
