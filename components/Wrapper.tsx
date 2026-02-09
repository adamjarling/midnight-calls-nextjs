"use client";

import { useOverflowHidden } from "@/context/overflow-hidden";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isOverflowHidden } = useOverflowHidden();

  return (
    <body
      className={`relative bg-black text-slate-50 ${
        isOverflowHidden ? "overflow-hidden" : ""
      }`}
    >
      {children}
    </body>
  );
}
