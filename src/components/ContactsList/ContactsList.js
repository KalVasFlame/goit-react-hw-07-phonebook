import React from "react"
import { connect } from "react-redux"
import ContactItem from "./ContactItem"

import { getLoading } from "../../redux/selectors"

const ContactsList = ({ isLoading }) => (
  <>
    {isLoading && <h1>Загружаем</h1>}
    <ul>
      <ContactItem />
    </ul>
  </>
)

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
})

export default connect(mapStateToProps)(ContactsList)
