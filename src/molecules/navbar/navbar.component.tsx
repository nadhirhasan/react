import searchIcon from './search_icon.png';
import styled from 'styled-components';
import { Text } from '../../component/atoms';
import { theme } from '@src/constants';

const SWrapper = styled.header`
  padding: 16px;
  display: grid;
  background-color: ${theme.grayColor};
  grid-auto-flow: column;
  justify-content: left;
  grid-gap: 16px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SSearch = styled.div`
  display: flex;
  justify-content: center;
  width: 75vw;
`;

const SSearchTerm = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  padding: 16px;
  width: 100%;
`;

const SSearchButton = styled.button`
  width: 55px;
  border: none;
  background: rgba(222, 224, 224, 1);
  text-align: center;
  color: #fff;
  padding: 16px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

const SIcon = styled.img`
  width: 100%;
`;

export const Navbar = () => {
  return (
    <SWrapper>
      <Text.Heading color="white" fontWeight="bold" fontSize="56px" mr="24px">
        Ceyello
      </Text.Heading>
      <SSearch>
        <SSearchTerm type="text" placeholder="Search for products" />
        <SSearchButton type="submit">
          <SIcon src={searchIcon} alt="icon" />
        </SSearchButton>
      </SSearch>
    </SWrapper>
  );
};
