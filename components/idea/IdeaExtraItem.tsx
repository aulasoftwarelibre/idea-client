import * as React from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";

export const IdeaExtraItem = ({ icon, label }: Props): JSX.Element => (
  <span className="extra item">
    <Icon name={icon} />
    {label}
    <style jsx>{`
      .extra.item {
        margin-left: 10px;
      }
    `}</style>
  </span>
);

export interface Props {
  icon: SemanticICONS;
  label: string;
}
