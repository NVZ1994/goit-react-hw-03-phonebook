import PropTypes from 'prop-types'
import React, { Component } from 'react'


const INITIAL_STATE = {
    name: '',
    phone: ''
}

export default class Form extends Component {
    static = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = { ...INITIAL_STATE }
    
    handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const contact = this.state
        this.props.onSubmit(contact)
        this.reset(event)
    }
    
    reset = (event) => {
        this.setState({
            ...INITIAL_STATE
        })
        event.currentTarget.reset()
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}> 
          <label className='Form__label'>
            Name
            <input className='Form__input'
                  type="text"
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
            />
          </label>
          <label className='Form__label'>
            Phone number
            <input className='Form__input'
                  type="tel"
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
            />
          </label>
          <button type="submit" className='Form__btn'>Add contact</button>
        </form>
    )
}

}

