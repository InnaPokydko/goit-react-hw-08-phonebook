import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchContact } from 'redux/operations';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getIsLoading, getError } from 'redux/selectors';
import { Container, Title, SecondTitle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <Title>Your phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;

