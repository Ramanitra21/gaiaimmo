// styles.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavBar = styled.nav`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Logo = styled.img`
  height: 80px;
  margin-right: auto; /* Ensure the logo is on the left */
 
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  position: relative;
  padding: 0 1rem;
  font-size: 18px;
  font-weight: bold;
  font-family: 'century gothic';
  &.active {
    text-decoration: underline;
    color: #2A9EE9;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 1px;
    background-color: ${({ theme }) => theme.text};
  }

  &:hover {
    text-decoration: underline;
    color: #2A9EE9;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: auto;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: flex;
    order: 2;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    margin: 4px 0;
    transition: 0.4s;
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 250px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1000;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    margin-top: 2rem;
  }
`;

export const SidebarLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin: 1rem 0;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
