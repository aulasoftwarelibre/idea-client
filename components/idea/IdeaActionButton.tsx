import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

export const IdeaActionButton = ({
  closed,
  joined,
  handleOnJoin,
  handleOnLeave
}: Props): JSX.Element => {
  if (closed) {
    return (
      <Button icon compact color={'red'} size={'small'} disabled>
        <Icon name="close" />
        <FormattedMessage id="idea.action.closed" />
      </Button>
    );
  }

  if (joined) {
    return (
      <Button compact animated icon color="green" size="small" onClick={() => handleOnLeave()}>
        <Button.Content visible>
          <Icon name="check" />
          <FormattedMessage id="idea.action.joined" />
        </Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
          <FormattedMessage id="idea.action.leave" />
        </Button.Content>
      </Button>
    );
  }

  return (
    <Button compact icon primary size={'small'} onClick={() => handleOnJoin()}>
      <Icon name="add" />
      <FormattedMessage id="idea.action.join" />
    </Button>
  );
};

export interface Props {
  closed: boolean;
  joined: boolean;
  handleOnJoin: any;
  handleOnLeave: any;
}
