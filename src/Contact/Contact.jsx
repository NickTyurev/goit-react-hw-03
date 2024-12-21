import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contact}>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)} className={styles.button}>Delete</button>
  </li>
);

export default Contact;
