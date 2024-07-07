// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './navigationBar';
import GlobalStyle from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
import Home from './screen/home';
import About from './screen/about';
import Services from './screen/service';
import Contact from './screen/contact';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 60px; /* Adjust according to the height of your navbar */
  padding: 20px; /* Optional: Add padding to content */
  overflow-y: auto; /* Ensure the content is scrollable */
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavigationBar toggleTheme={toggleTheme} />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
