import searchIcon from './search_icon.png';
import styled from 'styled-components';
import { theme } from '../../constants';
import { Text } from '../../atoms/';

const SVertical = styled.div`
  width: 0.5px;
  background-color: ${theme.lightGray};
  height: 100%;
`;

const SWrapper = styled.header`
  padding: 16px;
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.55);
  align-items: center;
`;

const SSearch = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
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
