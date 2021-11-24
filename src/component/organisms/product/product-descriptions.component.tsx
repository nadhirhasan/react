import { Text } from '@src/component/atoms';
import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { theme } from '@src/constants';
import { ProductDescriptionItem } from './product-description-item.component';

const SWrapper = styled.div<SpaceProps>`
  ${space}
`;

const SLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.lightGray};
  margin: 10px 0;
  padding: 0;
  width: 345px;
`;

interface Props extends SpaceProps {}

export const ProductDescriptions: React.FC<Props> = ({ ...rest }) => {
  return (
    <SWrapper {...rest}>
      <Text.SmallHeading> Product Detail</Text.SmallHeading>
      <SLine></SLine>
      <ProductDescriptionItem title="Shell Life" description="3 months" />
    </SWrapper>
  );
};
