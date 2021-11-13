import searchIcon from './search_icon.png';
import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  align-items: baseline;
  background-color: rgba(0, 0, 0, 0.55);
  height: 76px;
  margin: 0;
  align-items: center;
`;

const SLogo = styled.h1`
  margin-left: 34px;
  margin-top: 20px;
  color: whitesmoke;
  font-weight: 700;
  font-size: 50px;
`;

const SWrapper = styled.div`
  width: 50%;
  margin: 0px 0px 0px 200px;
  padding: 0;
`;

const SSearch = styled.div`
  width: 100%;
  display: flex;
`;

const SSearchTerm = styled.input`
  width: 100%;
  border: none;
  height: 46px;
  border-radius: 5px 0 0 5px;
  outline: none;
  padding: 20px;
`;

const SSearchButton = styled.button`
  width: 55px;
  border: none;
  background: rgba(222, 224, 224, 1);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

const SIcon = styled.img`
  width: 100%;
`;

export function Navbar() {
  return (
    <SHeader>
      <SLogo>Ceyello</SLogo>
      <SWrapper>
        <SSearch>
          <SSearchTerm type="text" placeholder="Search for products" />
          <SSearchButton type="submit">
            <SIcon src={searchIcon} alt="icon" />
          </SSearchButton>
        </SSearch>
      </SWrapper>
    </SHeader>
  );
}
