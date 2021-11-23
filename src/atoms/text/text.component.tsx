import { theme } from '@src/constants';
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

const Primary = styled.p<Props>`
  font-size: 12px;
  font-weight: 300;
  line-height: 1rem;
  ${space};
  ${color};
  ${typography};
`;

const Secondary = styled.p<Props>`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  line-height: 1rem;
  color: ${theme.grayColor};
  ${space};
  ${color};
  ${typography}
`;

const Body = styled.p<Props>`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 1rem;
  ${space};
  ${color};
  ${typography}
`;

const BodyLineThrough = styled.p<Props>`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 1rem;
  text-decoration: line-through;
  ${space};
  ${color};
  ${typography}
`;

const BodyBold = styled.p<Props>`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  line-height: 1rem;
  ${space};
  ${color};
  ${typography}
`;

const Heading = styled.h2<Props>`
  margin: 0;
  font-weight: 600;
  line-height: 1rem;
  ${space};
  ${color};
  ${typography}
`;

const SmallHeading = styled.h4<Props>`
  margin: 0;
  font-weight: 600;
  line-height: 1rem;
  ${space};
  ${color};
  ${typography}
`;

const TextGray = styled.p<Props>`
  margin: 0;
  color: rgb(162, 166, 163);
  font-weight: 400px;
  font-size: 15px;
  ${space};
  ${color};
  ${typography}
`;

export const Text = {
  Primary,
  Body,
  BodyBold,
  Heading,
  SmallHeading,
  Secondary,
  BodyLineThrough,
  TextGray,
};
