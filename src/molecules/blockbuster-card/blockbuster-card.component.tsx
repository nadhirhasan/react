import { Text } from '../../atoms';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 300px;
  border: 1px solid ${theme.lightGray};
  background-color: white;
  border-radius: 8px;
  position: relative;
  padding: 16px;
`;

const SOffer = styled(Text.BodyBold)`
  border-radius: 0px 8px 0px 8px;
  font-weight: 600;
  background-color: ${theme.greenColor};
  padding: 8px;
  width: max-content;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
`;

const SImage = styled.img`
  height: 150px;
  width: 250px;
  background: transparent;
`;

const SDis = styled.div`
  opacity: 0.5;
  text-decoration: line-through;
  margin: 0;
`;

const SPrice = styled.div`
  font-weight: 600;
  margin: 0;
`;

const SName = styled.p`
  font-weight: 500;
  margin-top: 16px;
`;

const SBtn = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: rgb(241, 87, 31);
  border: none;
  cursor: pointer;
  color: white;
`;

const STextWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

type Props = {
  offer?: number;
  discount?: number;
  image: string;
  price: number;
  name: string;
  btn_name: string;
};

export const BlockBusterCard: React.FC<Props> = ({
  offer,
  discount,
  image,
  price,
  name,
  btn_name,
}) => {
  return (
    <SWrapper>
      <SOffer>{offer}% OFF</SOffer>

      <SImage src={image} alt="block buster"></SImage>

      <STextWrapper>
        <Text.Body>Rs.{discount}</Text.Body>
        <SPrice>Rs.{price}</SPrice>
        <SName>{name}</SName>
      </STextWrapper>

      <SBtn>{btn_name}</SBtn>
    </SWrapper>
  );
};
