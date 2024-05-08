"use client";

import cn from "classnames";
import { useOverflowHidden } from "@/context/overflow-hidden";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isOverflowHidden } = useOverflowHidden();

  return (
    <body
      className={cn([`relative bg-black text-slate-50`], {
        "overflow-hidden": isOverflowHidden,
      })}
    >
      <div>
        <div className="">{children}</div>
      </div>
    </body>
  );
}
