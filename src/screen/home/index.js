import React, { useState, useEffect } from 'react';
import { HomeStyle, LeftSection, RightSection, Title, Description, Button, Image, Footer, BodyStyle, Title2, Textb, IconsContainer, IconItem, IconLabel } from './style/homeStyle';
import { FaHome, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'; // Import FontAwesome icons
import image3 from './images/architecture-1719526.jpg';
import image2 from './images/kitchen-1543493.jpg';
import image1 from './images/real-estate-6688945.jpg';

const images = [image1, image2, image3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BodyStyle>
      <HomeStyle>
        <LeftSection>
          <Title>
            Gaia
          </Title>
          <Title2>
            immobilier
          </Title2>
          <Description>
            Les meilleures opportunités immobilières à Madagascar.
          </Description>
          <Button><Textb>En savoir plus</Textb></Button>
          { <IconsContainer>
            <IconItem>
              <FaHome size={40} color='#ECD464'/>
              <IconLabel>Maison</IconLabel>
            </IconItem>
            <IconItem>
              <FaMapMarkerAlt size={40} color='#2A9EE9' />
              <IconLabel>Parcelle</IconLabel>
            </IconItem>
            <IconItem>
              <FaBuilding size={40} color='#ECD464'/>
              <IconLabel>Appartement</IconLabel>
            </IconItem>
          </IconsContainer> }
        </LeftSection>
        <RightSection>
          <Image src={images[currentImageIndex]} alt="Gaia Immo" />
        </RightSection>
      </HomeStyle>
      <Footer>
      <p> gaiaimmo@gmail.com</p>
       <p> &copy; 2024 Gaia Immo. All rights reserved.</p>
       <p>033 93 370 26</p>
      </Footer>
    </BodyStyle>
  );
};

export default Home;
