"use client";

interface IconButtonProps {
  onClick: () => void;
  customClass?: string;
  label?: string;
  disabled?: boolean;
  svg?: React.ReactElement;
}

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps
) => {
  const { onClick, label, disabled, customClass = "", svg } = props;
  const btnClass =
    "flex items-center justify-center rounded-lg border border-stone-400 text-stone-400";

  return (
    <button
      className={`${btnClass} ${customClass}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {svg && <span>{svg}</span>}
    </button>
  );
};
