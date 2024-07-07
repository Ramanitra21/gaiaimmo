// App.js
import React from 'react';
import ProductList from './component/horizontalScrollBar';
import { FaHome, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { LineProduct, TypeProduct, TitleProduct, Text, ViewMore , Containt , Total} from './style/app';
import { IconItem, IconLabel } from '../home/style/homeStyle';
const products = [
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 1 Description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 2 Description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 1 Description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 2 Description',
  },
];

const About = () => (
  <Containt>
    <div>
    <LineProduct>
        <TypeProduct>
          <TitleProduct>
            Maison
          </TitleProduct>
          <Total>
            (18 articles)
          </Total>
        </TypeProduct>
        <ViewMore>
          <Text>
            Afficher tout
          </Text>
        </ViewMore>
    </LineProduct>
    <ProductList products={products} />
  </div>
  <div>
  <LineProduct>
        <TypeProduct>
          <TitleProduct>
            Maison
          </TitleProduct>
        </TypeProduct>
        <ViewMore>
          <Text>
            Afficher tout
          </Text>
        </ViewMore>
    </LineProduct>
    <ProductList products={products} />
  </div>
  <div>
  <LineProduct>
        <TypeProduct>
          <TitleProduct>
            Maison
          </TitleProduct>
        </TypeProduct>
        <ViewMore>
          <Text>
            Afficher tout
          </Text>
        </ViewMore>
    </LineProduct>
    <ProductList products={products} />
  </div>
  </Containt>
);

export default About;
