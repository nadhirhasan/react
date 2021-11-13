import { MiniBlockBuster } from "../../organisms/mini-blockbuster-categories/mini-blockbuster-catergories";
import styled from "styled-components";
import { ProductList } from "../../molecules/products-list/products-list.component";
import { Navbar } from "../../molecules/navbar/navbar.component";
const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:44px;
`;

export function ElectronicsProducts() {
    return (
        <>
        <Navbar/>
        <SWrapper>
            <ProductList/>
            <MiniBlockBuster/>
        </SWrapper>
        </>
    )
}