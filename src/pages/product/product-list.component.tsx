import { MiniBlockBuster } from '../../organisms/mini-blockbuster-categories/mini-blockbuster-catergories';
import styled from 'styled-components';
import { ProductList as ProductsWrapper } from '../../molecules/products-list/products-list.component';
import { Navbar } from '../../molecules/navbar/navbar.component';
const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

export const ProductList = () => {
  return (
    <>
      <Navbar />
      <SWrapper>
        <ProductsWrapper />
        <MiniBlockBuster />
      </SWrapper>
    </>
  );
};
