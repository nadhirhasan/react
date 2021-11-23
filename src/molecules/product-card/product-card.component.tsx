import { Button, Text } from '@src/atoms';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { theme } from '../../constants';
import { useNavigate } from 'react-router-dom';

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

const STextWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

type Props = {
  id?: string;
  offer?: number;
  discount?: number;
  image: string;
  price: number;
  name: string;
  btn_name: string;
};

export const ProductCard: React.FC<Props> = ({
  id = 'ewaeaskjdfnfdjsf',
  offer,
  discount,
  image,
  price,
  name,
  btn_name,
}) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate('/products/' + id);
  }, [id, navigate]);

  return (
    <SWrapper onClick={onClickHandler}>
      <SOffer>{offer}% OFF</SOffer>
      <SImage src={image} alt="block buster"></SImage>
      <STextWrapper>
        <Text.BodyLineThrough fontSize="10px">
          Rs.{discount}
        </Text.BodyLineThrough>
        <Text.BodyBold fontSize="14px">Rs.{price}</Text.BodyBold>
        <Text.BodyBold fontSize="16px" mt="8px">
          {name}
        </Text.BodyBold>
      </STextWrapper>
      <Button p="16px">{btn_name}</Button>
    </SWrapper>
  );
};
