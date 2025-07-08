import { type ReactNode } from "react";
import { useNavigate } from "react-router";

type buttonProps = {
  children: ReactNode;
  link?: string;
  action?: () => void;
  showbar?: boolean;
};

export default function Button({
  children,
  link,
  action,
  showbar,
}: buttonProps) {
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();
  // Classes de base pour tous les boutons
  const baseClasses = "w-full flex gap-3 items-center  px-4 py-3 rounded-lg";

  // Classes conditionnelles
  const activeClasses = "bg-[#3B82F6] text-white";
  const inactiveClasses = "text-gray-100 hover:bg-[#3B82F6] hover:text-white";
  return (
    <button
      onClick={() => {
        if (link) navigate(link);
        if (action && showbar) action();
      }}
      className={`${baseClasses} ${
        isActive(link ?? "") ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  );
}
