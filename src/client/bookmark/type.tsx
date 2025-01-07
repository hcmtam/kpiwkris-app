export type BookmarkRowType = {
  id: string;
  sessionName: string;
  sessionId: string;
  // content: string;
  createdAt: Date;
};

// export type BookmarkListItemType = {
//   id: string;
//   sessionName: string;
//   sessionId: string;
//   content: string;
//   createdAt: Date;
// };

// export type BookmarkListType = BookmarkListItemType[];

export type BookmarkContentRewindType = {
  sessionId: string;
  user: string;
  score: number;
  intersections: string[];
  requirementWords: string[];
  requirement: string;
  passage: string;
  enhancement?: { [k: string]: string[] };
  passageKeywords?: { [k: string]: string[] };
  enhancedScore?: number;
};
