// ProductCard.js
import React from 'react';
import { CardContainer, ProductImage, ProductDescription, Line1 } from './cardStyle';


const ProductCard = ({ image, description }) => (
  <CardContainer>
    <ProductImage src={image} alt="Product Image" />
    <ProductDescription>
      <Line1>
        <p>sjjjjdjd</p>
      </Line1>
    </ProductDescription>
  </CardContainer>
);

export default ProductCard;
