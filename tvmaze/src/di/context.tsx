import React, { createContext, useContext, useMemo } from "react";
import { createContainer, type Container } from "./container";

const DIContext = createContext<Container | null>(null);

export const DIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const container = useMemo(() => createContainer(), []);
  return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
};

export function useDI(): Container {
  const c = useContext(DIContext);
  if (!c) throw new Error("DI container not available");
  return c;
}