export interface Idea {
  title: string;
  description: string;
  closed: boolean;
  state: IdeaState;
  createdAt: Date;
  updatedAt: Date;
  group: Group;
  numSeats: number;
  startsAt: Date;
  location?: string;
  joined?: boolean;
}

export type IdeaState = "new" | "proposed" | "approved" | "rejected";

export interface Group {
  name: string;
}
