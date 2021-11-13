import { ProductImageCard } from '../../molecules/productImage-card';
import { ProductDetailCard } from '../../molecules/productDetail-card/productDetail-card.component';
import styled from 'styled-components';
import { Navbar } from '../../molecules/navbar/navbar.component';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

export function ProductDetailTamplate() {
  return (
    <div>
      <Navbar />
      <SWrapper>
        <ProductImageCard />
        <ProductDetailCard />
      </SWrapper>
    </div>
  );
}
