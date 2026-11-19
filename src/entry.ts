import type { ReactNode } from "react";

export type Entry = {
  id: string;
  file: string;
  section: string;
  /** In the essay this floats beside the prose at this width on desktop. */
  side?: "20rem" | "16rem";
  figure: ReactNode;
};
