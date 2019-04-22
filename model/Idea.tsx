import { Group } from "./Group";
import { Vote } from "./Vote";
import { User } from "./User";

export interface Idea {
  title: string;
  description: string;
  closed: boolean;
  state: IdeaState;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  group: Group;
  votes: Vote[];
  numSeats: number;
  joined?: boolean;
}

export type IdeaState = "new" | "proposed" | "approved" | "rejected";
