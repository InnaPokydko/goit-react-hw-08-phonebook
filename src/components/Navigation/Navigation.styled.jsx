import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavLinkStyles = styled(NavLink)`

  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color:  #ffff;

  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #12D8FA;
  }

  &.active {
    color: white;
    background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%);
    box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  }
`;