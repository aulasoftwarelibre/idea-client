import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import styled, { css } from 'styled-components';
import Parser from 'html-react-parser';

import { IdeaExtraItem } from './IdeaExtraItem';
import { IdeaActionButton } from './IdeaActionButton';
import { Idea } from '../../model/Idea';

export const IdeaItem = ({
  idea,
  summary,
  handleOnTitleClick,
  handleOnJoin,
  handleOnLeave
}: Props): JSX.Element => (
  <IdeaBox fluid>
    <IdeaContent
      {...(summary ? { clickable: true, onClick: () => handleOnTitleClick(idea.slug) } : {})}
    >
      <IdeaSendBy>
        <IdeaGroupName>{idea.group.name}</IdeaGroupName>
        <FormattedMessage id="idea.send" values={{ user: idea.owner.username }} />
        <FormattedRelative value={idea.createdAt} />
      </IdeaSendBy>
      <Card.Header>{idea.title}</Card.Header>
      <Label attached={'top right'} inverted color={'green'}>
        <FormattedMessage id={`idea.state.${idea.state}`} />
      </Label>
      <IdeaDescription summary={summary}>{Parser(idea.description)}</IdeaDescription>
    </IdeaContent>
    <IdeaContent extra>
      <IdeaActionButton
        closed={idea.closed}
        joined={!!idea.joined}
        handleOnJoin={handleOnJoin}
        handleOnLeave={handleOnLeave}
      />
      <IdeaExtraItem icon="user">
        <FormattedMessage
          id={idea.numSeats ? 'idea.extra.users' : 'idea.extra.users.unlimited'}
          values={{
            count: idea.votes.length,
            seats: idea.numSeats
          }}
        />
      </IdeaExtraItem>
    </IdeaContent>
  </IdeaBox>
);

export interface Props {
  idea: Idea;
  summary: boolean;
  handleOnTitleClick: (slug: string) => any;
  handleOnJoin: any;
  handleOnLeave: any;
}

const IdeaBox = styled(Card)`
  &.ui.card {
    border-radius: 0;
  }
`;

const IdeaContent = styled(Card.Content)`
  ${props =>
    props.clickable &&
    css`
      cursor: pointer;
    `}

  &.content.extra {
    border-top: unset !important;
  }
`;

const IdeaSendBy = styled(Card.Meta)`
  margin-bottom: 10px;
`;

const IdeaGroupName = styled.span`
  background-color: #edeff1;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: 500;
  color: black;
`;

const IdeaDescription = styled(Card.Description)`
  clear: unset;
  font-family: 'Lato', sans-serif;

  ${props =>
    props.summary &&
    css`
      -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
      mask-image: linear-gradient(180deg, #000 60%, transparent);
      overflow: hidden;
      padding: 5px 8px 10px;
      max-height: 200px;
    `}
`;
