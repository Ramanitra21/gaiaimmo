// NavigationBar.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBar, Logo, NavLinks, NavLink, ThemeToggle, HamburgerMenu, Sidebar, SidebarLink, Overlay } from './style';
import { lightTheme, navdarkTheme } from './theme';
import logoImage from './assets/logo.png'; // Remplacez par le chemin vers votre image de logo

const NavigationBar = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={isDarkMode ? navdarkTheme : lightTheme}>
      <NavBar>
        <Logo src={logoImage} alt="Logo" />
        <NavLinks>
          <NavLink to="/home" activeClassName="active">Accueil</NavLink>
          <NavLink to="/about" activeClassName="active">Produit</NavLink>
          <NavLink to="/service" activeClassName="active">Service</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </NavLinks>
        <ThemeToggle onClick={handleThemeToggle}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ThemeToggle>
        <HamburgerMenu onClick={handleSidebarToggle}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerMenu>
      </NavBar>
      <Overlay isOpen={isSidebarOpen} onClick={handleSidebarToggle} />
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarLink to="/home" activeClassName="active" onClick={handleSidebarToggle}>Home</SidebarLink>
        <SidebarLink to="/about" activeClassName="active" onClick={handleSidebarToggle}>About</SidebarLink>
        <SidebarLink to="/service" activeClassName="active" onClick={handleSidebarToggle}>Service</SidebarLink>
        <SidebarLink to="/contact" activeClassName="active" onClick={handleSidebarToggle}>Contact</SidebarLink>
      </Sidebar>
    </ThemeProvider>
  );
};

export default NavigationBar;
