import styled from 'styled-components';
import { theme } from '../../constants';

const SWrapper = styled.div`
  width: 350px;
  position: relative;
  margin-top:50px;
  margin-left:44px;
`;

const SOffTag = styled.p`
  background: green;
  width: 70px;
  height: 25px;
  color: white;
  border-radius: 7px;
  text-align: center;
  padding: 4px;
`;

const SName = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 20px;
`;

const SDis = styled.div`
  text-decoration: line-through;
  font-weight: 400;
`;

const SPrice = styled.div`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 16px;
`;

const SText = styled.div`
  font-weight: 400;
`;

const SColorWrapper = styled.div`
  display: flex;
`;

const SMaroonColorCircle = styled.p`
  width: 38px;
  height: 38px;
  background: #893b3b;
  border-radius: 19px;
  margin-right: 10px;
  cursor: pointer;
`;

const SLightBlueColorCircle = styled.p`
  width: 38px;
  height: 38px;
  background: #19dcb9;
  border-radius: 19px;
  margin-right: 10px;
  cursor: pointer;
`;

const SBlueColorCircle = styled.p`
  width: 38px;
  height: 38px;
  background: #287ab5;
  border-radius: 19px;
  margin-right: 10px;
  cursor: pointer;
`;

const SRoseColorCircle = styled.p`
  width: 38px;
  height: 38px;
  background: #e53cd5;
  border-radius: 19px;
  margin-right: 10px;
  cursor: pointer;
`;

const SMiniImage = styled.img`
  width: 90px;
  cursor: pointer;
`;

const SImageWrapper = styled.div`
  display: flex;
`;

const SLabelWrapper = styled.div`
  display: flex;
`;

const SSmallLabel = styled.p`
  background: rgba(233, 97, 37, 0.1);
  font-weight: 600;
  width: 60px;
  height: 20px;
  color: black;
  border-radius: 5px;
  text-align: center;
  padding: 3px 6px;
  margin-right: 16px;
  cursor: pointer;
`;

const SLargeLabel = styled.p`
  background: rgb(233, 97, 37);
  font-weight: 600;
  width: 60px;
  height: 20px;
  color: white;
  border-radius: 5px;
  text-align: center;
  padding: 3px 6px;
  margin-right: 16px;
  cursor: pointer;
`;

const SMediumLabel = styled.p`
  background: rgba(233, 97, 37, 0.1);
  font-weight: 600;
  width: 60px;
  height: 20px;
  color: black;
  border-radius: 5px;
  text-align: center;
  padding: 3px 6px;
  border: 1px solid black;
  margin-right: 16px;
  cursor: pointer;
`;

const SButton = styled.button`
  position: absolute;
  right: 0px;
  background: ${theme.mainColor};
  border: none;
  height: 48px;
  width: 95px;
  font-weight: 600;
  color: white;
  border-radius: 16px;
  margin-top: 30px;
  cursor: pointer;
`;

export function ProductDetailCard() {
  return (
    <SWrapper>
      <SOffTag>10% OFF</SOffTag>
      <SName>Microwave oven</SName>
      <SDis>Rs.10500</SDis>
      <SPrice>Rs.10,000</SPrice>
      <SText>Color</SText>
      <SColorWrapper>
        <SMaroonColorCircle />
        <SLightBlueColorCircle />
        <SBlueColorCircle />
        <SRoseColorCircle />
      </SColorWrapper>
      <SText>Image</SText>
      <SImageWrapper>
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
      </SImageWrapper>
      <SText>Label</SText>
      <SLabelWrapper>
        <SSmallLabel>Small</SSmallLabel>

        <SLargeLabel>Large</SLargeLabel>

        <SMediumLabel>Medium</SMediumLabel>
      </SLabelWrapper>
      <SButton>Contact us</SButton>
    </SWrapper>
  );
}
