import { ProductImageCarousal } from '../../molecules/product-image-carousal';
import styled from 'styled-components';
import { Navbar } from '../../molecules/navbar/navbar.component';
import { ProductDescriptions, ProductDetailContent } from '@src/organisms';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

const SLeft = styled.div``;

export const ProductDetails = () => {
  return (
    <div>
      <Navbar />
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
