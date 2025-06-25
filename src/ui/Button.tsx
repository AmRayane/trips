import { type ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
};

export default function Button({ children }: buttonProps) {
  return <>{children}</>;
}
