import * as React from "react";
import { Card, Icon, Button, Label } from "semantic-ui-react";
import { FormattedMessage, FormattedRelative } from "react-intl";

import { IdeaExtraItem } from "./IdeaExtraItem";
import { IdeaActionButton } from "./IdeaActionButton";
import { Idea } from "../../model/Idea";

export const IdeaItem = ({
  idea,
  summary,
  handleOnTitleClick,
  handleOnJoin,
  handleOnLeave
}: Props): JSX.Element => (
  <Card
    fluid={true}
    {...(summary ? { onClick: () => handleOnTitleClick(idea.slug) } : {})}
  >
    <Card.Content>
      <Card.Meta className="send by">
        <span className="group">{idea.group.name}</span>
        <FormattedMessage
          id="idea.send"
          values={{
            user: idea.owner.username
          }}
        />
        <FormattedRelative value={idea.createdAt} />
      </Card.Meta>
      <Card.Header>{idea.title}</Card.Header>
      <Label attached={"top right"} inverted color={"green"}>
        <FormattedMessage id={`idea.state.${idea.state}`} />
      </Label>
      <Card.Description>
        <div
          className={summary ? "summary" : ""}
          dangerouslySetInnerHTML={{ __html: idea.description }}
        />
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {idea.closed ? (
        <Button icon compact color={"red"} size={"small"} disabled>
          <Icon name="close" />
          Closed
        </Button>
      ) : (
        <IdeaActionButton
          joined={!!idea.joined}
          handleOnJoin={handleOnJoin}
          handleOnLeave={handleOnLeave}
        />
      )}
      <IdeaExtraItem icon="user">
        {idea.numSeats ? (
          <FormattedMessage
            id="idea.extra.users"
            values={{
              count: idea.votes.length,
              seats: idea.numSeats
            }}
          />
        ) : (
          <FormattedMessage
            id="idea.extra.users.unlimited"
            values={{
              count: idea.votes.length
            }}
          />
        )}
      </IdeaExtraItem>
    </Card.Content>
    <style jsx>{`
      .ui.card {
        border-radius: 0;
      }
      .ui.card > .content > .description {
        clear: unset;
        font-family: "Lato", sans-serif;
      }
      .title {
        cursor: pointer;
      }
      .summary {
        -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
        mask-image: linear-gradient(180deg, #000 60%, transparent);
        overflow: hidden;
        padding: 5px 8px 10px;
        max-height: 200px;
      }
      .group {
        background-color: #edeff1;
        padding: 0 4px;
        border-radius: 2px;
        font-weight: 500;
        color: black;
      }
      .send.by {
        margin-bottom: 10px;
      }
      .ui.card > .extra {
        border-top: unset !important;
      }
    `}</style>
  </Card>
);

export interface Props {
  idea: Idea;
  summary: boolean;
  handleOnTitleClick: (slug: string) => any;
  handleOnJoin: any;
  handleOnLeave: any;
}
