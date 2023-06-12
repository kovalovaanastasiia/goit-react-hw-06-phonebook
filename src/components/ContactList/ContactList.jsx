import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteContact, getContacts} from "../../redux/contactsSlice";

import {StyledList} from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(state => state.filter.filter).toLowerCase();

  const onFilterChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <StyledList>
      {onFilterChange().map(({id, name, number}) => (
        <li className='list-item' key={id}>
          <p>{name}</p>
          <span>{number}</span>
          <button
            type='button'
            className='delete-button'
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </StyledList>
  );
};

