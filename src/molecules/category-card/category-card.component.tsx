import React from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';
import { ReactComponent as RightChevron } from '../../assets/icons/right-chevron-orange.icon.svg';

const Swrapper = styled.div`
  display: flex;
  width: 320px;
  border: 1px solid ${theme.mainColor};
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.mainColor}10;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const SImage = styled.img`
  width: 130px;
  height: 83px;
`;

const SUl = styled.ul`
  list-style: none;
`;

const SOffText = styled.li`
  color: ${theme.greenColor};
  font-weight: 700;
`;

type Props = {
  title: string;
  discount?: number;
  image: any;
};

export const CategoryCard: React.FC<Props> = ({ discount, title, image }) => {
  return (
    <Swrapper>
      <SImage src={image} alt="category-image" />
      <SUl>
        {discount ? <SOffText>{discount}% OFF</SOffText> : null}
        <li style={{ fontWeight: 'bold' }}>{title}</li>
      </SUl>
      <RightChevron />
    </Swrapper>
  );
};
