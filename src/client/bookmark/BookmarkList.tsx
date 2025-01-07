"use client";
import { CSSProperties, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useRouter } from "next/navigation";
import { UseFormRegister } from "react-hook-form";
import styles from "@/styles/Bookmark.module.scss";
import { BookmarkRowType } from "./type";
import { SettingsSVG } from "../common/svg";
import { useBookmarkContext } from "./BookmarkContext";

export interface BookmarkListInterface {
  onSelectById: (id: string) => void;
}

export const BookmarkList: React.FC<BookmarkListInterface> = (
  props: BookmarkListInterface
) => {
  const { list } = useBookmarkContext();
  const { onSelectById } = props;

  console.log(`BookmarkList list`, list);

  return (
    <div
      className={`${styles.bookmarkList} overflow-y-auto border-r border-stone-500`}
    >
      <div className="border-b border-stone-500 text-stone-300 h-9">
        <button>
          <SettingsSVG size={20} />
        </button>
        <button>
          <SettingsSVG size={20} />
        </button>
      </div>
      {list &&
        list.map((row: BookmarkRowType) => {
          const { id, sessionId, sessionName } = row;
          return (
            <div
              className="h-16 flex-col p-2 border-b border-stone-500"
              onClick={() => onSelectById(id)}
            >
              <div className="text-stone-200">{sessionId}</div>
              <div className="text-stone-400 font-semibold">
                {"session name"}
              </div>
            </div>
          );
        })}
    </div>
  );
};
