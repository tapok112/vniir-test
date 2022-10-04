import { ReactNode } from "react";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type LayoutProps = {
  children?: ReactNode,
  loading?: boolean,
  error?: string
};

export type ProtectedPageProps = {
  children: ReactNode
};
