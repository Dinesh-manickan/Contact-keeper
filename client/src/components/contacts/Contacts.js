import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  // Check if filtered is an array
  const contactsToDisplay = Array.isArray(filtered) && filtered.length > 0 ? filtered : contacts;

  return (
    <Fragment>
      <TransitionGroup>
      {contactsToDisplay.map((contact) => (
        <CSSTransition key={contact.id} timeout={500} classNames="item">
        <ContactItem contact={contact} />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
