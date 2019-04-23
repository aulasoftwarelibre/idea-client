import * as React from 'react';
import { FormattedMessage } from 'react-intl';
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
          <Menu.Item>
            <FormattedMessage id="idea.topmenu.home" />
          </Menu.Item>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/help" passHref>
          <Menu.Item>
            <FormattedMessage id="idea.topmenu.help" />
          </Menu.Item>
        </ActiveLink>
      </Container>
    </Menu>
  </div>
);

const MenuBurgerItem = styled(Menu.Item)`
  .ui.menu:not(.vertical) &.item {
    display: none;
  }
`;

const MenuLogoItem = styled(Menu.Item)`
  background: url('images/ideas-small.png') no-repeat;
  width: 66px;
  height: 27px;
  margin: 5px 10px 0 15px;
`;
