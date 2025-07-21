import { type ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
  requierRole?: "admin" | "client";
};
export default function ProtectedRoute({
  children,
  requierRole,
}: ProtectedRouteProps) {
  return (
    <div>
      ProtectedRoute {children} {requierRole}{" "}
    </div>
  );
}
