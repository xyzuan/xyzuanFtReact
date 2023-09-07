"use client";
import * as React from "react";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: ThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
