import ContactsForm from './contactForm/contactForm';
import { ContactList } from './contactList/ContactsList';
import { nanoid } from 'nanoid'

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSabmitHendel = data => {
    this.addContact(data);
  };

 addContact= data => {
  data.id = nanoid()
  this.setState(prevState => ({
    contacts: [data, ...prevState.contacts]
  }));
};



  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ContactsForm onSubmit={this.formSabmitHendel} />
        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
