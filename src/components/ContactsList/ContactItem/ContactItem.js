import { connect } from "react-redux"
import React, { Component } from "react"

import * as operations from "../../../redux/operations"
import { filteredContacts, getContacts, getFilter } from "../../../redux/selectors"

import styles from "./ContactItem.module.css"

class ContactItem extends Component {
  componentDidMount() {
    this.props.onFetchContacts()
  }

  // getFilteredContacts = (allContacts, filterValue) =>
  //   allContacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()))

  render() {
    const { onDeleteClick, contacts } = this.props
    return contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.contacts_item}>
          {name}: {number}
          <button className={styles.contacts_item_button} onClick={() => onDeleteClick(id)} type="button">
            Delete
          </button>
        </li>
      )
    })
  }
}

const mapStateToProps = (state) => ({
  contacts: filteredContacts(state),
  filter: getFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(operations.deleteContact(id)),
  onFetchContacts: () => dispatch(operations.fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)
