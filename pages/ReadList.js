import React, { Component } from 'react'
import SavedBook from "../components/SavedBook"
import Card from "../components/Card"


export default class ReadList extends Component {

  

  render() {
    return (
      <div className="container">
        < Card heading="Saved Books List" />
        <SavedBook />
      </div>
    )
  }
}