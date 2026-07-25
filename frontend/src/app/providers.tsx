import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return <>{children}</>;
}

export default Providers;