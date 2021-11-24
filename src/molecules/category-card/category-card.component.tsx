import React, { useCallback } from 'react';
import styled from 'styled-components';
import { theme } from '@src/constants';
import { ReactComponent as RightChevron } from '@src/assets/icons/right-chevron-orange.icon.svg';
import { Text } from '../../component/atoms';
import { useNavigate } from 'react-router';

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
  id: string;
  title: string;
  discount?: number;
  image: any;
};

export const CategoryCard: React.FC<Props> = ({
  id,
  discount,
  title,
  image,
}) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate('/categories/' + id);
  }, []);

  return (
    <Swrapper onClick={onClickHandler}>
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
