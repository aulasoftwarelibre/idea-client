import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, boolean } from "@storybook/addon-knobs";

import { IdeaItem } from "../components/idea/IdeaItem";
import { Idea } from "../model/Idea";

const ideaItem: Idea = {
  title: "An amazing idea title",
  description:
    `<p>This is mainly about how to <b>solve technical</b> problems that arise from using front or back end technologies to make web pages or web apps but some of these steps will be applicable to solving technical problems in general.</p>` +
    `<ol><li>One</li><li>Two</li><li>Three</li><li>Four</li></ol>` +
    `<p>The sweating bitmap summarizes a disorder. The damage spans the designed punch. Why won't the sinister satellite learn the fellow household? A release toes the line?</p>` +
    `<p>A shock obstructs the prerequisite plant. The recovery participates before the ago developer. The physicist vanishes inside a debate. A verified counterpart bankrupts the wound. A miserable rhythm slaves past the puzzle.</p>`,
  closed: false,
  state: "approved",
  slug: "an-amazing-idea-title",
  createdAt: new Date(),
  updatedAt: new Date(),
  owner: {
    username: "bofh"
  },
  group: { name: "Main Group" },
  numSeats: 0,
  votes: [
    {
      user: {
        username: "johndoe"
      }
    },
    {
      user: {
        username: "jennydoe"
      }
    }
  ],
  joined: false
};

storiesOf("Idea", module).add(
  "basic",
  () => {
    const summary = boolean("Summary", true);
    const idea = object("Idea", ideaItem);

    return (
      <div className="root">
        <IdeaItem
          idea={idea}
          summary={summary}
          handleOnTitleClick={action("title-action")}
          handleOnJoin={action("join-action")}
          handleOnLeave={action("leave-action")}
        />
        <style jsx>{`
          .root {
            max-width: 80%;
            margin: auto;
          }
        `}</style>
      </div>
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
