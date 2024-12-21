import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in format XXX-XX-XX')
      .required('Number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label>
            Number
            <Field type="text" name="number" className={styles.input} />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit" className={styles.button}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
