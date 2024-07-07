import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const HomeStyle = styled.div`
  display: flex;
  height: calc(100vh - 60px); /* Adjust height to allow space for footer */
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    min-height: 20vh;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: start;
  justify-content: center;
  padding: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    padding: 50px;
    @media (max-width: 768px) {
    padding: 20px;
    min-height: 20vh;
  }
  }

`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure pseudo-element is positioned relative to this container */
  overflow: hidden; /* Ensure the zoom effect doesn't cause scrollbars */
  margin-top: 0.5%;
   @media (max-width: 768px) {
    display: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px; /* Adjust the width to control the gradient size */
    height: 100%;
    background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
    pointer-events: none; /* Ensure the pseudo-element doesn't block mouse events */
    z-index: 1; /* Ensure the pseudo-element is above the image */
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: 'century gothic';
  color: #ECD464;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Title2 = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  font-family: 'century gothic';
  color: #2A9EE9;
   @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 20px;
  width: 100%;
  font-family: 'century gothic';
   @media (max-width: 768px) {
    font-size: 1.6rem
    }
`;

export const Textb = styled.p`
  font-family: 'century gothic';
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  @media (max-width: 1030px) {
    font-size: 1.3rem;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 10px 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
  width: 40%;
  height: 10%;
  background-color: #2A9EE9;
  border: none;
  animation: ${float} 3s ease-in-out infinite; /* Apply floating animation */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Add some space below the button */
  @media (max-width: 768px) {
    width: 80%;
    height: 20%;
    }
`;

export const IconsContainer = styled.div`
  display: none;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px; /* Add some space above the icons */
  @media (max-width: 768px) {
    display: flex;
    }
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconLabel = styled.span`
  margin-top: 8px;
  font-size: 1rem;
  font-family: 'century gothic';
  color: #2A9EE9;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${zoomIn} 3s ease-in-out infinite alternate; /* Apply zoom effect */
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: auto; /* Push footer to the bottom */
  width: 100%;
  padding: 20px;
  background: #333;
  color: #fff;
  text-align: center;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
    }
`;
