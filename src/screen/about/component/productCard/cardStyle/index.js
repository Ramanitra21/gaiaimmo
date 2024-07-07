import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:    300px;
  margin: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProductDescription = styled.div`
    height: 100px;
`;

export const Line1 = styled.div`
    background-color: blue;
    height: 20%;
`;