"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { BookmarkContainer, useBookmarkControl } from "@/client/bookmark";

export default function Page() {
  const { onSelectPrev, onSelectNext, onSelectById, onDeleteById } =
    useBookmarkControl();

  const [list, setList] = useState<any[]>();

  const handleBookmarkList = async () => {
    const res = await axios.get(`${process.env.KRIS_API_URL}/bookmark`);

    console.log(res.data.data);
    setList(res.data.data);
    return;
  };

  useEffect(() => {
    handleBookmarkList();
  }, []);

  return (
    <div>
      <BookmarkContainer
        list={list}
        onSelectPrev={onSelectPrev}
        onSelectNext={onSelectNext}
        onSelectById={onSelectById}
        onDeleteById={onDeleteById}
      />
    </div>
  );
}
