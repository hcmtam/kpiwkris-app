"use client";
import { useEffect, useMemo } from "react";
import { useBookmarkContext } from "./BookmarkContext";
import axios from "axios";

export const useInitTabContent = () => {
  const { list, currentId, setCurrentId } = useBookmarkContext();

  const refId = useMemo(() => {}, [currentId]);

  useEffect(() => {}, [list]);
};
