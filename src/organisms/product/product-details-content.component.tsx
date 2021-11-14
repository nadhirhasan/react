import { Text } from '@src/atoms';
import styled from 'styled-components';
import { theme } from '../../constants';

const SWrapper = styled.div`
  width: 350px;
  position: relative;
  margin-top: 50px;
  margin-left: 44px;
`;

const SOffer = styled(Text.BodyBold)`
  width: max-content;
  border-radius: 8px;
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
  display: grid;
  grid-auto-flow: column;
  justify-content; left;
  grid-gap: 8px;
  margin-top : 16px
`;

type LabelProps = {
  selected?: boolean;
};

const SLabel = styled(Text.BodyBold)<LabelProps>`
  ${(props) => (props.selected ? 'color : white;' : '')}
  border-radius: 8px;
  background-color: ${(props) =>
    props.selected ? theme.mainColor : `${theme.mainColor}10`};
  text-align: center;
  padding: 8px;
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

export const ProductDetailContent = () => {
  return (
    <SWrapper>
      <SOffer color="white" p="8px" backgroundColor={theme.greenColor}>
        10% OFF
      </SOffer>
      <Text.Heading mt="8px">Microwave oven</Text.Heading>
      <Text.BodyLineThrough mt="16px">Rs.10500</Text.BodyLineThrough>
      <Text.Heading mt="8px">Rs.10,000</Text.Heading>
      <Text.Body mt="24px">Color</Text.Body>
      <SColorWrapper>
        <SMaroonColorCircle />
        <SLightBlueColorCircle />
        <SBlueColorCircle />
        <SRoseColorCircle />
      </SColorWrapper>
      <Text.Body mt="16px">Image</Text.Body>
      <SImageWrapper>
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
        <SMiniImage src={theme.ovenImage} />
      </SImageWrapper>
      <Text.Body mt="16px">Label</Text.Body>
      <SLabelWrapper>
        <SLabel selected>Small</SLabel>
        <SLabel>Medium</SLabel>
        <SLabel>Large</SLabel>
      </SLabelWrapper>
      <SButton>Contact us</SButton>
    </SWrapper>
  );
};
