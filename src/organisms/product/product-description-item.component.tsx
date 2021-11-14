import { Text } from '@src/atoms';
import { theme } from '@src/constants';
import React from 'react';
import styled from 'styled-components';

const SLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.lightGray};
  margin: 10px 0;
  padding: 0;
  width: 345px;
`;

interface Props {
  title: string;
  description: string;
}

export const ProductDescriptionItem: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <>
      <Text.Body>{title}</Text.Body>
      <Text.Secondary mt="4px">{description}</Text.Secondary>
      <SLine></SLine>
    </>
  );
};
