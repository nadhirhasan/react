import styled from 'styled-components';
import { theme } from '../../constants';
import { ReactComponent as RightChevron } from '../../assets/icons/right-chevron-orange-mini.icon.svg';
import { ReactComponent as LefttChevron } from '../../assets/icons/left-chevron-orange-mini.icon.svg';
import { ReactComponent as SelectionIcon } from '../../assets/icons/selection-buttons.icon.svg';

const SWrapper = styled.div`
  width: 526px;
  margin-right:44px;
`;

const SMainImage = styled.img`
  width: 425px;
  cursor: pointer;
`;

const SProductDetailText = styled.p`
  font-weight: 700;
  font-size: 15px;
`;

const SHrLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${theme.lightGray};
  margin: 10px 0;
  padding: 0;
  width: 345px;
`;

const SShelfLife = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const SLighGrayText = styled.div`
  color: rgb(158, 157, 157);
  font-size: 14px;
  width: 380px;
`;

const SImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SAllTexts = styled.div`
  margin: 0px 0px 0px 80px;
`;

const SIcon = styled.div`
  display: inline-block;
  width: 100%;
  text-align:center;
`;

export function ProductImageCard() {
  return (
    <SWrapper>
      <SImageWrapper>
        <LefttChevron />
        <SMainImage src={theme.ovenImage} />
        <RightChevron />
      </SImageWrapper>
      <SIcon>
        <SelectionIcon />
      </SIcon>
      <SAllTexts>
        <SProductDetailText> Product Detail</SProductDetailText>
        <SHrLine></SHrLine>
        <SShelfLife>Shelf Life</SShelfLife>
        <SLighGrayText>3 months</SLighGrayText>
        <SHrLine></SHrLine>
        <SProductDetailText>Manufacturer Details</SProductDetailText>
        <SLighGrayText>
          HINDUSTAN COCA-COLA BEVERAGES PVT. LTD. , SURVEY NO. 284-P, POST
          KUDUS, TALUKA WADA, DISTRICT PALGHAR- 421 312, MAHARASHTRA
        </SLighGrayText>
      </SAllTexts>
    </SWrapper>
  );
}
