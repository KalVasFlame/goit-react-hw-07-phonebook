import React from "react"
import ContactForm from "./components/ContactForm"
import ContactsList from "./components/ContactsList"
import Filter from "./components/Filter"

import styles from "./App.module.css"
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      </div>
    )
  }
}

export default App
