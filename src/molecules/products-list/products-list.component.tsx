import styled from 'styled-components';
import { theme } from '../../constants';
import { Text } from '@src/atoms';
import { useState } from 'react';

const SWrapper = styled.div`
  width: 275px;
  margin-right: 44px;
`;

const SListWrapper = styled.div`
  width: 275px;
  border: 1px solid rgb(162, 166, 163);
  border-radius: 10px;
  margin-right: 44px;
  position: fixed;
`;

const SText = styled(Text.TextGray)`
  padding: 6px;
  padding-left: 36px;
  :hover {
    color: ${theme.mainColor};
    background: rgba(222, 122, 60, 0.2);
    cursor: pointer;
  }
`;

export const ProductList = () => {
  return (
    <SWrapper>
      <SListWrapper>
        <SText>Electronics</SText>
        <SText>Baby Care</SText>
        <SText>Kitchen War</SText>
        <SText>Clothing</SText>
        <SText>Grocery</SText>
        <SText>Vagetables</SText>
      </SListWrapper>
    </SWrapper>
  );
};
