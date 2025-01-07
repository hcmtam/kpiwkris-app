"use client";
import { useEffect, useCallback } from "react";
import { useBookmarkContext } from "./BookmarkContext";
import axios from "axios";

export const useUpdateTabContent = () => {
  const { currentId, setCurrentContent, currentContent } = useBookmarkContext();

  const getBookmark = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.KRIS_API_URL}/bookmark/${currentId}`
      );

      return res.data.data.content;
    } catch (err) {
      console.log(`getBookmark err`, err);
    }
  }, [currentId]);

  useEffect(() => {
    if (currentContent.sessionId == currentId) return;

    getBookmark().then((bookmark: string) => {
      const data = JSON.parse(bookmark);
      console.log();
      setCurrentContent(data);
    });
  }, [currentId]);
};
