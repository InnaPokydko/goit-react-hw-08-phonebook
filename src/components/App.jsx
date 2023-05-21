import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};









// import ContactForm from './ContactForm/ContactForm';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { fetchContact } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
// import Loader from './Loader/Loader';
// import { Container, Title, SecondTitle } from './App.styled';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContact());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <SecondTitle>Contacts</SecondTitle>
//       <Filter />
//       {isLoading && <Loader />}
//       {error && <div>Error: {error}</div>}
//       <ContactList />
//     </Container>
//   );
// }
