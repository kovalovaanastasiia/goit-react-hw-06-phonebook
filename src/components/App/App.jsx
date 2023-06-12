import React from 'react';
import {ToastContainer} from 'react-toastify';

import {Form} from '../Form/Form';
import {Filter} from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';

import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

  return (
    <div>
      <h1 style={{marginLeft: 20}}>Phonebook</h1>
      <Form/>
      <h2 style={{marginLeft: 20}}>Contacts</h2>
      <Filter/>
      <ContactList/>
      <ToastContainer/>
    </div>

  );
}
