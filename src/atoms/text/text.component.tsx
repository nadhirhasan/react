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
  ${space};
  ${color};
  ${typography}
`;

const Body = styled.p<Props>`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  ${space};
  ${color};
  ${typography}
`;

const BodyBold = styled.p<Props>`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  ${space};
  ${color};
  ${typography}
`;

const Heading = styled.h2<Props>`
  margin: 0;
  font-weight: 600;
  ${space};
  ${color};
  ${typography}
`;

export const Text = { Primary, Body, BodyBold, Heading };
