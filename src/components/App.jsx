import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import { ContactList } from './ContactList/ContactList'
import { Container, Section, TitleH1, TitleH2 } from './App.styled';

const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contactsLS = localStorage.getItem('contacts');
    const parsContants = JSON.parse(contactsLS);

    if (!parsContants) return
    this.setState({ contacts: parsContants });
  }

  componentDidUpdate(_, prevState) {
    // console.log (prevState)
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  addContact = newContact => {
    const Repeat = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    )
      Repeat ? toast.error(`${newContact.name}: is already in contacts`, notifyOptions)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <TitleH1>Phonebook</TitleH1>
          <ContactForm onAddContact={this.addContact} />
          <TitleH2>Contacts</TitleH2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </Section>
        <ToastContainer />
      </Container>
    );
  }
}




