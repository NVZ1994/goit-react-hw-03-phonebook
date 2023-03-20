import { Component } from "react"
import initialContacts from '../contacts.json'
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./FilterInput/Filter"
import Form from "./Form/Form"
import './App.css'


export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  handleContactSubmit = ({ name, phone, }) => {
    const contacts = this.state.contacts
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('This contact already exists')
    }
    else {
      const newContact = { name, phone, id: nanoid(5) }
      this.setState((prevState) => ({ contacts: [newContact, ...prevState.contacts] }))
    }
  }

  handleDeleteContact = (id) => {
    console.log('hi')
    this.setState((prevState) => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  handleFilter = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  afterFilter = () => {
    const { contacts, filter } = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }


  render() {
    const {filter, contacts} = this.state
    return (
      <div className='Container'>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleContactSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <ContactList contacts={!filter.length ? contacts : this.afterFilter()}
          onDelete={this.handleDeleteContact} />
      </div>
    );
  }
};




