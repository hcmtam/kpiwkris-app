"use client";

export const useBookmarkControl = () => {
  const onSelectPrev = () => {
    return true;
  };

  const onSelectNext = () => {
    return true;
  };
  const onSelectById = () => {
    return true;
  };

  const onDeleteById = () => {
    return true;
  };

  return {
    onSelectPrev,
    onSelectNext,
    onSelectById,
    onDeleteById,
  };
};
