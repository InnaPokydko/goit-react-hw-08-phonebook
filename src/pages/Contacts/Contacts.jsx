import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchContact } from 'redux/operations';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { getIsLoading, getError } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default Contacts;

