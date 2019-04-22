import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IdeaActionButton } from '../components/idea/IdeaActionButton';

storiesOf('Idea Action Button', module)
  .add('not joined', () => {
    return (
      <IdeaActionButton
        closed={false}
        joined={false}
        handleOnJoin={action('join-action')}
        handleOnLeave={action('leave-action')}
      />
    );
  })
  .add('joined', () => {
    return (
      <IdeaActionButton
        closed={false}
        joined={true}
        handleOnJoin={action('join-action')}
        handleOnLeave={action('leave-action')}
      />
    );
  })
  .add('closed', () => {
    return (
      <IdeaActionButton
        closed={true}
        joined={true}
        handleOnJoin={action('join-action')}
        handleOnLeave={action('leave-action')}
      />
    );
  });
