"use client";

import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "@/styles/Common.module.scss";
import { DashboardContainer } from "@/client/dashboard/DashboardContainer";
import { KrisContainer } from "@/client/kris";
import axios from "axios";
import { useKrisControl } from "@/client/kris";

export default async function Page() {
  const { generateKrisSession } = useKrisControl();

  useEffect(() => {
    generateKrisSession();
  }, []);

  const handleBookmark = async () => {
    console.log("handleBookmark", process.env.KRIS_API_URL);
    const res = await axios.post(`${process.env.KRIS_API_URL}/bookmark`, {});
    console.log("handleBookmark res", res);
  };

  const handleAnalyze = async (requirement: string, passage: string) => {
    const res = await axios.post(`${process.env.KRIS_API_URL}/kris/analyze`, {
      requirement: requirement,
      passage: passage,
    });

    console.log(`${process.env.KRIS_API_URL}/kris/analyze`);
    console.log("handleBookmark res", res);
    return res?.data;
  };

  return (
    <div>
      <KrisContainer onBookmark={handleBookmark} onAnalyze={handleAnalyze} />
    </div>
  );
}
