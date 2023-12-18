import React, { useReducer } from 'react';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Saiesh',
                email: 'saiesh@gmail.com',
                phone: "2222222222",
                type: 'personal'
            },
            {
                id: 2,
                name: 'John Doe',
                email: "john.doe@example.com",
                phone: "0987654321",
                type: 'personal'
            },
            {
                id: 3,
                name: 'Jane Smith',
                email: "jane.smith@work.com",
                phone: "1234567890",
                type: 'professional'
            }
        ],
        current: null,
        filteres: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = (contact) => {
        // Add your logic for adding a contact here
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });

    }

    // Delete Contact
    const deleteContact = (id) => {
        // Add your logic for deleting a contact here
        dispatch({ type: DELETE_CONTACT, payload:id});
    }

    // Set Current Contact
    const setCurrent = (contact) => {
        // Add your logic for setting the current contact here
        dispatch({type: SET_CURRENT, payload: contact});
    }

    // Clear Current Contact
    const clearCurrent = () => {
        // Add your logic for clearing the current contact here
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact
    const updateContact = (contact) => {
        // Add your logic for updating a contact here
        dispatch({ type: UPDATE_CONTACT, payload: contact})
    }

    // // Filter Contacts
    const filterContacts = (text) => {
        // Add your logic for filtering contacts here
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    // // Clear Filter
    const clearFilter = () => {
        // Add your logic for clearing the filter here
        dispatch({ type: CLEAR_FILTER})
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
