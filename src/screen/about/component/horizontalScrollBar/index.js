// ProductList.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../productCard';

const ScrollContainer = styled.div`
  display: flex;
  padding: 20px;
  white-space: nowrap;
  
`;

const ProductList = ({ products }) => (
  <ScrollContainer>
    {products.map((product, index) => (
      <ProductCard
        key={index}
        image={product.image}
        description={product.description}
      />
    ))}
  </ScrollContainer>
);

export default ProductList;
