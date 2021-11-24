import { ProductImageCarousal } from '@src/molecules';
import styled from 'styled-components';
import {
  ProductDescriptions,
  ProductDetailContent,
} from '@src/component/organisms';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

const SLeft = styled.div``;

export const ProductDetails = () => {
  return (
    <div>
      <SWrapper>
        <SLeft>
          <ProductImageCarousal />
          <ProductDescriptions mt="32px" />
        </SLeft>
        <ProductDetailContent />
      </SWrapper>
    </div>
  );
};
