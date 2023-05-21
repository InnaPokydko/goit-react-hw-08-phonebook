import { useAuth } from 'hooks';
import { NavLinkStyles } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      < NavLinkStyles to="/">
        Home
      </ NavLinkStyles>
      {isLoggedIn && (
        < NavLinkStyles to="/contacts">
          Contacts
        </ NavLinkStyles>
      )}
    </nav>
  );
};
