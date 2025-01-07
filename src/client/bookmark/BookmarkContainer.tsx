"use client";
import { CSSProperties, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useRouter } from "next/navigation";
import { UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";
import { BookmarkRowType } from "./type";
import { BookmarkList } from "./BookmarkList";
import { BookmarkTab } from "./BookmarkTab";
import BookmarkContextProvider from "./BookmarkContext";

export interface BookmarkContainerInterface {
  list: BookmarkRowType[];
  onSelectPrev: () => void;
  onSelectNext: () => void;
  onSelectById: () => void;
  onDeleteById: () => void;
}

export const BookmarkContainer: React.FC<BookmarkContainerInterface> = (
  props: BookmarkContainerInterface
) => {
  const { list, onSelectById } = props;

  console.log(`BookmarkContainer list`, list);

  return (
    <div className="px-8 pt-4 pb-8">
      <BookmarkContextProvider list={list}>
        <div
          className="flex flex-row w-full h-full rounded border border-cyan-700
            shadow-md shadow-cyan-500"
        >
          <div className="">
            <BookmarkList onSelectById={onSelectById} />
          </div>

          <div className="">
            <BookmarkTab />
          </div>
        </div>
      </BookmarkContextProvider>
    </div>
  );
};
