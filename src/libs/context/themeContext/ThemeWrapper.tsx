"use client";
import { useThemeContext } from "./ThemeContext";

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useThemeContext()
  return <div data-theme={theme}>{children}</div>;
}