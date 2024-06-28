// IconText.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  color: #2A9EE9; /* Couleur de l'icône */
`;

const Text = styled.span`
  font-size: 18px;
`;

const IconText = ({ icon, text }) => (
  <Container>
    <Icon icon={icon} />
    <Text>{text}</Text>
  </Container>
);

export default IconText;
