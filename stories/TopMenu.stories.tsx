import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TopMenu } from '../components/menu/TopMenu';
import { StorybookRouterFix } from '../utils/storybook/StoryRouterFix';

storiesOf('Menu', module).add('top menu', () => {
  return (
    <StorybookRouterFix>
      <TopMenu />
    </StorybookRouterFix>
  );
});
