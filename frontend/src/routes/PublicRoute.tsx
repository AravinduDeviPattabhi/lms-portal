import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PublicRoute({ children }: Props) {
  return children;
}

export default PublicRoute;