import styled from 'styled-components';
import { theme } from '../../constants';
const SWrapper = styled.div`
  width: 275px;
  height: 308px;
  border: 1px solid rgb(162, 166, 163);
  border-radius: 10px;
  margin-right: 44px;
`;

const SText = styled.div`
  color: rgb(162, 166, 163);
  padding: 4px;
  margin-top: 12px;
  padding-left: 36px;
`;

const SSelectedText = styled.div`
  color: ${theme.mainColor};
  padding: 4px;
  background: rgba(222, 122, 60, 0.2);
  padding-left: 36px;
  margin-top: 20px;
`;

export function ProductList() {
  return (
    <SWrapper>
      <SSelectedText>Electronics</SSelectedText>
      <SText>Baby Care</SText>
      <SText>Kitchen Ware</SText>
      <SText>Clothing</SText>
      <SText>Grocery</SText>
      <SText>Vagetables</SText>
    </SWrapper>
  );
}
