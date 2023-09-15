"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const AuthProviders = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
