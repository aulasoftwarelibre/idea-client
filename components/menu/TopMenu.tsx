import * as React from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import styled from 'styled-components';

import ActiveLink from './ActiveLink';

export const TopMenu = ({}): JSX.Element => (
  <div className="pusher">
    <Menu fixed="top" pointing secondary size="large">
      <Container>
        <MenuBurgerItem>
          <Icon name="sidebar" />
        </MenuBurgerItem>
        <ActiveLink href="/index" passHref>
          <MenuLogoItem className="logo" as="a" />
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/index" passHref>
          <Menu.Item>Inicio</Menu.Item>
        </ActiveLink>
      </Container>
    </Menu>
  </div>
);

const MenuBurgerItem = styled(Menu.Item)`
  &&&& {
    display: none;
  }
`;

const MenuLogoItem = styled(Menu.Item)`
  &&&&&& {
    background: url('/images/ideas-small.png') no-repeat;
    width: 66px;
    height: 27px;
    margin: 5px 10px 0 15px;
  }
`;
