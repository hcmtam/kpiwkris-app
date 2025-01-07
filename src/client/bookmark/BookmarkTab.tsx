"use client";
import { CSSProperties, useState } from "react";
import { useRouter } from "next/navigation";
import { UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";
import { BookmarkRowType } from "./type";
import { BookmarkList } from "./BookmarkList";
import { useBookmarkContext } from "./BookmarkContext";
import { Loading } from "../common";
import { BookmarkRewind } from "./BookmarkRewind";
import { useUpdateTabContent } from "./useUpdateTabContent";

export interface BookmarkTabInterface {}

export const BookmarkTab: React.FC<BookmarkTabInterface> = (
  props: BookmarkTabInterface
) => {
  const { currentContent } = useBookmarkContext();

  useUpdateTabContent();

  return (
    <div className="">
      {!currentContent && <Loading />}

      {currentContent && <BookmarkRewind {...currentContent} />}
    </div>
  );
};
