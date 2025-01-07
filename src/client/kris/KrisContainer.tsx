"use client";
import { CSSProperties, useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useRouter } from "next/navigation";
import { useForm, UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";
import { TextAreaInput } from "../common/form-inputs";
import { BorderButton } from "../common/buttons/BorderButton";
import { BookmarkStarSVG, CheckSVG, RobotSVG } from "../common/svg";

type FormInputFields = {
  requirement: string;
  passage: string;
};

export interface KrisContainerInterface {
  onAnalyze: (
    requirement: string,
    passage: string
  ) => Promise<{ score: number; intersections: string[] }>;
  onBookmark: () => void;
}

export const KrisContainer: React.FC<KrisContainerInterface> = (
  props: KrisContainerInterface
) => {
  const { onAnalyze, onBookmark } = props;

  const [requirement, setRequiremet] = useState<string>("");
  const [passage, setPassage] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const handleAnalyze = async () => {
    const res = await onAnalyze(requirement, passage);
    console.log(`onAnalyze`, res);
  };

  return (
    <div className="px-8 pt-4 pb-8">
      <div className="flex flex-row pb-2 justify-end">
        <BorderButton
          onClick={onBookmark}
          label={"Bookmark"}
          svg={<BookmarkStarSVG size={28} />}
          customClass="w-32 border-cyan-400 text-cyan-400
              shadow shadow-gray-500 p-1"
        />
        <BorderButton
          onClick={handleAnalyze}
          label={"Analyze"}
          svg={<RobotSVG size={28} />}
          customClass="w-32 border-cyan-400 text-cyan-400
              shadow shadow-gray-500 ml-4 p-1"
        />
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col h-full mr-2">
          <div
            className="p-2 rounded border border-cyan-700
            shadow-md shadow-cyan-500 mb-2"
          >
            <label className="text-stone-300">Requirement: </label>
            <textarea
              rows={10}
              cols={60}
              onChange={(e) => {
                setRequiremet(e.target.value);
              }}
            ></textarea>
          </div>

          <div
            className="p-2 rounded border border-cyan-700
            shadow-md shadow-cyan-500 mt-2"
          >
            <label className="text-stone-300">Passage: </label>
            <textarea
              rows={10}
              cols={60}
              onChange={(e) => {
                setPassage(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div
          className="w-full p-2 rounded border border-cyan-700 text-stone-300 ml-2
        shadow-md shadow-cyan-500"
        >
          <p>view results</p>

          <div className="">
            <p>Score: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
