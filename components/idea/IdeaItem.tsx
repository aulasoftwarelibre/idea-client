import * as React from "react";
import { Card, Icon, Button, Label } from "semantic-ui-react";
import ReactTimeAgo from "react-time-ago";

import { IdeaExtraItem } from "./IdeaExtraItem";
import { IdeaActionButton } from "./IdeaActionButton";
import { Idea } from "../../domain/idea/Idea";

export const IdeaItem = ({
  idea,
  summary,
  handleOnJoin,
  handleOnLeave
}: Props): JSX.Element => (
  <Card fluid={true}>
    <Card.Content>
      <Card.Meta className="send by">
        <span className="group">{idea.group.name}</span> Send by user{" "}
        <ReactTimeAgo date={idea.createdAt} locale="es" />
      </Card.Meta>
      <Card.Header>{idea.title}</Card.Header>
      <Label attached={"top right"} inverted color={"green"}>
        APPROVED
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
      <IdeaExtraItem icon="user" label="22/40 people" />
      <IdeaExtraItem icon="comment" label="10 comments" />
    </Card.Content>
    <style jsx>{`
      .ui.card {
        border-radius: 0;
      }
      .ui.label {
        border-top-right-radius: 0 !important;
      }
      .ui.card > .content > .description {
        clear: unset;
        font-family: "Lato", sans-serif;
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
  handleOnJoin: any;
  handleOnLeave: any;
}
