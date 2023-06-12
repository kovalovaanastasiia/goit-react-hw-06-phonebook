import React, {useState} from 'react';
import {addContact, getContacts} from "../../redux/contactsSlice";
import {useDispatch, useSelector} from "react-redux";

import {nanoid} from "nanoid";
import {toast} from "react-toastify";

import {StyledForm} from './styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);

  const changeHandler = event => {
    const {value, name} = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const submitHandler = event => {
    event.preventDefault();
    if (contacts.some(el => el.name === name)) {
      toast.error(`${name} is already exist!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      dispatch(addContact({id: nanoid(), name, number}));
    }
    setName('');
    setNumber('');
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <label className='form-label'>
        <span className='label-name'>Name</span>
        <input
          className='form-input'
          type='text'
          value={name}
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeHandler}
        />
      </label>
      <label className='form-label'>
        <span className='label-name'>Number</span>
        <input
          className='form-input'
          type='tel'
          value={number}
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          onChange={changeHandler}
        />
      </label>
      <button type='submit' className='form-btn' onSubmit={submitHandler}>
        Add contact
      </button>
    </StyledForm>
  );
}
