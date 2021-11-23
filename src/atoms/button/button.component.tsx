import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

type Props = SpaceProps & ColorProps & TypographyProps;

export const Button = styled.button<Props>`
  width: 100%;
  background-color: rgb(241, 87, 31);
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  ${space};
  ${color};
  ${typography};
`;
