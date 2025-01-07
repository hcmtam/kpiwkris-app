"use client";

import React, {
  createContext,
  FC,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BookmarkRowType, BookmarkContentRewindType } from "./type";
import { String } from "lodash";

interface ContextProviderProps {
  children: any;
  list: BookmarkRowType[];
}

export type BookmarkContextProps = {
  list: BookmarkRowType[];
  currentId: string;
  setCurrentId: Dispatch<SetStateAction<string>>;
  currentContent: BookmarkContentRewindType | null;
  setCurrentContent: Dispatch<SetStateAction<BookmarkContentRewindType | null>>;
};

const contextDefaultValues: BookmarkContextProps = {
  list: [],
  currentId: "",
  setCurrentId: () => null,
  currentContent: null,
  setCurrentContent: () => null,
};

export const BookmarkContext =
  createContext<BookmarkContextProps>(contextDefaultValues);

const BookmarkContextProvider: FC<ContextProviderProps> = ({
  list,
  children,
}) => {
  const [currentId, setCurrentId] = useState<string>();
  const [currentContent, setCurrentContent] =
    useState<BookmarkContentRewindType>();

  return (
    <BookmarkContext.Provider
      value={{
        list,
        currentId,
        setCurrentId,
        currentContent,
        setCurrentContent,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;

export function useBookmarkContext(): BookmarkContextProps {
  return useContext(BookmarkContext);
}
