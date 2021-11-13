import React from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 257px;
  height: 309px;
  border: 1px solid ${theme.lightGray};
  background-color: white;
  border-radius: 8px;
  position: relative;
  padding: 16px;
`;

const SOffTag = styled.span`
  background-color: green;
  border-radius: 0px 8px 0px 8px;
  width: 67px;
  color: white;
  font-weight: 600;
  padding: 8px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

const SImage = styled.img`
  height: 126px;
  width: 201px;
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

export const MiniBlockBusterCard: React.FC<Props> = ({
  offer,
  discount,
  image,
  price,
  name,
  btn_name,
}) => {
  return (
    <SWrapper>
      <SOffTag>{offer}% OFF</SOffTag>

      <SImage src={image} alt="block buster"></SImage>

      <STextWrapper>
        <SDis>Rs.{discount}</SDis>
        <SPrice>Rs.{price}</SPrice>
        <SName>{name}</SName>
      </STextWrapper>

      <SBtn>{btn_name}</SBtn>
    </SWrapper>
  );
};
