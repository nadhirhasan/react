import styled from 'styled-components';
import { theme } from '@src/constants';
import { ReactComponent as RightChevron } from '@src/assets/icons/right-chevron-orange-mini.icon.svg';
import { ReactComponent as LefttChevron } from '@src/assets/icons/left-chevron-orange-mini.icon.svg';
import { ReactComponent as SelectionIcon } from '@src/assets/icons/selection-buttons.icon.svg';

const SWrapper = styled.div`
  width: 526px;
  margin-right: 44px;
`;

const SMainImage = styled.img`
  width: 425px;
  cursor: pointer;
`;

const SImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SIcon = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
`;

export const ProductImageCarousal = () => {
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
    </SWrapper>
  );
};
