import { NavLinkStyles } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyles  to="/register">
        Register
      </NavLinkStyles>
      <NavLinkStyles to="/login">
        Log In
      </NavLinkStyles>
    </div>
  );
};