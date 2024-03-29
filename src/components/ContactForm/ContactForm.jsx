// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getContacts } from 'redux/selectors';
import {
  FormBox,
  Input,
  Label,
  BtnForm,
  ErrorMess,
} from './ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const  numberRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter valid name').required(),
  number: Yup.string().matches( numberRegExp, 'Enter valid  number').required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContact({ name: name, number: number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormBox autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMess name="name" component={ErrorMess} />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ErrorMess name="number" component="div" />
        <BtnForm type="submit">Add contact</BtnForm>
      </FormBox>
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
