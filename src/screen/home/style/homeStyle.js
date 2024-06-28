// styles.js
import styled from 'styled-components';
import { fontSizeScale } from '../../../fontsizeScale';

export const HomeStyle = styled.div`
    display: flex; /* Ajout de display: flex */
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
    background-color: #2A9EE9;
    @media (max-width: 650px) {
    flex-direction: column;
    padding: 0;
    height: 100%;
  }
`;

export const Droite = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    height: 50vh;
    justify-content: space-between;
    @media (max-width: 650px) {
        width: 100%;
  }
`;

export const BlockD = styled.div`
    display: flex; /* Ajout de display: flex */
    width: 100%;
    margin: 0 auto;
    flex-direction: row; 
    align-items: center;
    @media (max-width: 650px) {
        width: 100%;
  }
`;

export const BlockE = styled.div`
    display: flex; /* Ajout de display: flex */
    width: 100%;
    margin: 0 auto;
    flex-direction: row; 
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: 650px) {
        width: 100%;
  }
`;

export const Description = styled.h2`
    color: #2A9EE9;
    font-size: 'century gothic';
`;







export const Gauche = styled.div`
    display: flex; /* Ajout de display: flex */
    width: 50%;
    margin: 0 auto;
    padding: 20px; 
    align-items: center;
    @media (max-width: 650px) {
        width: 100%;
  }
`;

export const PinkCard = styled.div`
  display: flex; /* Ajout de display: flex */
  border-width: 20px;
  background-color: #2A9EE9;
  border-radius: 20px;
  height: 40vh;
  width: 90%;
  box-shadow: 0 1px 3px ;
  transition: transform 0.3s, box-shadow 0.3s;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px ;
  }
  @media (max-width: 950px) {
    padding: 5px;
    width: 80%;
  }
`;

export const ContentText = styled.div`
    width: 50%;
    height: 40vh;
    @media (max-width: 950px) {
        display: none;
  }
`;
export const ContentImage = styled.div`
    background-color: Green;
    width: 50%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    
`;

export const Ligne = styled.div`
    width: 5px;
    height: 100px;
    background-color: #2A9EE9;
`;

export const TitleStyle = styled.h1`
    font-size: 30px;
    margin-bottom: 40px;
    font-family: 'century gothic'
`;



export const TitleStyle2 = styled.h2`
    font-size: ${({ scale }) => fontSizeScale(16, scale)};
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: 'century gothic';
    color: white;
    @media (max-width: 950px) {
        display: none;
  }
`;

export const TitleStyle3 = styled.h3`
    font-size: ${({ scale }) => fontSizeScale(12, scale)};
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: 'century gothic';
    justify-content: space-between;
    align-items: center;
    color: white;
    @media (max-width: 950px) {
        display: none;
  }
`;

export const ContentH3 = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  margin-left: 10px;
  @media (max-width: 950px) {
        display: none;
  }
`;


export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  border-radius: 20px;
  height: 50vh;
  &:hover button {
    opacity: 1;
  }
  @media (max-width: 950px) {
        width: 100%;
        height: 50vh;
  }

`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;


export const NavigationButton = styled.button`
position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:focus {
    outline: none;
  }

  ${(props) => (props.right ? 'right: 10px;' : 'left: 10px;')}
`;


