"use client";
import { CSSProperties, useState } from "react";
import { useRouter } from "next/navigation";
import { UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";
import { BookmarkRowType, BookmarkContentRewindType } from "./type";
import { BookmarkList } from "./BookmarkList";
import { useBookmarkContext } from "./BookmarkContext";
import { Loading } from "../common";

export interface BookmarkRewindInterface extends BookmarkContentRewindType {}

export const BookmarkRewind: React.FC<BookmarkRewindInterface> = (
  props: BookmarkRewindInterface
) => {
  const {
    score,
    intersections,
    requirement,
    requirementWords,
    passage,
    passageKeywords,
    enhancement,
    enhancedScore,
  } = props;

  return (
    <div className="flex-col">
      <div>Requirement: {requirement}</div>

      <div>Passage: {passage}</div>

      <div>
        Before score:
        <span className="font-bold text-cyan-500">{score}</span>
      </div>

      <div>Enhancement: {JSON.stringify(enhancement)}</div>

      <div>
        After score:{" "}
        <span className="font-bold text-cyan-500">{enhancedScore}</span>
      </div>
    </div>
  );
};
