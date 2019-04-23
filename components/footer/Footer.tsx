import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

export const Footer = ({}): JSX.Element => (
  <FooterSegment inverted vertical>
    <Container>
      <p>
        <FormattedMessage id="idea.footer.developed_by" />{' '}
        <a href="https://www.uco.es/aulasoftwarelibre">Aula de Software Libre</a>.{' '}
        <FormattedMessage id="idea.footer.hosted_by" />{' '}
        <a href="https://consejo-eps.uco.es/">CEEPS</a>.
      </p>
    </Container>
  </FooterSegment>
);

const FooterSegment = styled(Segment)`
  &.ui.segment {
    padding: 1em 0em;
    @media (min-height: 320px) {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
`;
