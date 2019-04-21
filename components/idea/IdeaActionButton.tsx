import * as React from "react";
import { Button, Icon } from "semantic-ui-react";

export const IdeaActionButton = ({
  joined,
  handleOnJoin,
  handleOnLeave
}: Props): JSX.Element =>
  joined ? (
    <Button
      compact
      animated
      icon
      color="green"
      size={"small"}
      onClick={() => handleOnLeave()}
    >
      <Button.Content visible>
        <Icon name="check" />
        Joined
      </Button.Content>
      <Button.Content hidden>
        <Icon name="arrow left" />
        Leave
      </Button.Content>
    </Button>
  ) : (
    <Button compact icon primary size={"small"} onClick={() => handleOnJoin()}>
      <Icon name="add" />
      Join
    </Button>
  );

export interface Props {
  joined: boolean;
  handleOnJoin: any;
  handleOnLeave: any;
}
