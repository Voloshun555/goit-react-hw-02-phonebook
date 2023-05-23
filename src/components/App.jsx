import ContactsForm from './contactForm/contactForm';
import { ContactList } from './contactList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';

import css from './App.module.css';

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 
  addContact = data => {
    data.id = nanoid();
    const nameToLowerCase = data.name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === nameToLowerCase || contact.number === data.number
      )
    ) {
      alert(`${data.name} або ${data.number} вже є в телефонній книзі`);
      return;
    }

    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleFilter = this.getVisibleContacts();

    return (
      <div className={css.appDiv}>
        <h1 className={css.title}>Телефонна книга</h1>
        <ContactsForm onSubmit={this.addContact} />
        <h3>Тіпа твої друзі: {contacts.length}- штука</h3>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={visibleFilter}
            onDeletContacts={this.deleteContacts}
          />
        ) : (
          <p>На жаль у тебе не має контактів</p>
        )}
      </div>
    );
  }
}

export default App;
