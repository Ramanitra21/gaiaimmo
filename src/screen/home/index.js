import React from 'react';
import { HomeStyle, TitleStyle, Ligne, Droite, Gauche, BlockD, BlockE, Description} from './style/homeStyle';
import Slider from './components/firesblock';
import { FaBuilding, FaLandmark, FaHome } from 'react-icons/fa'; // Importation des icônes Font Awesome

const Home = () => {
  return (
    <HomeStyle>
      <Droite>
      {/* <BlockE>
          <Description>
          "Votre portail pour les meilleures opportunités immobilières à Madagascar."
          </Description>
        </BlockE> */}
        <BlockD>
        <TitleStyle>
        Bienvenue sur Gaiaimmo
        </TitleStyle>
        </BlockD>
        <BlockD>
        <Description>
        " Votre portail pour les meilleures opportunités immobilières à Madagascar. "
        </Description>

        </BlockD>
       
      </Droite>
      <Gauche>
      </Gauche>
    </HomeStyle>
  );
};

export default Home;
