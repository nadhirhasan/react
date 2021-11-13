import React from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';
import { ReactComponent as RightChevron } from '../../assets/icons/right-chevron-orange.icon.svg';
import { Text } from '../../atoms';

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
  margin-right: 16px;
`;

const STextWrapper = styled.div`
  margin-right: 24px;
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
      <STextWrapper>
        {discount ? (
          <Text.BodyBold color={theme.greenColor}>
            {discount}% OFF
          </Text.BodyBold>
        ) : null}
        <Text.Body mt="8px" fontWeight="600">
          {title}
        </Text.Body>
      </STextWrapper>
      <RightChevron />
    </Swrapper>
  );
};
