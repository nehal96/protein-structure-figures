// Every figure in "Solving the First Protein Structures", one page per draft of the essay.
import { useEffect, useState } from "react";
import { cn } from "@lib/utils";
import type { Entry } from "./entry";
import { FIGURES as DRAFT_3 } from "./draft-3";
import { FIGURES as DRAFT_4 } from "./draft-4";

const DRAFTS: { n: string; folder: string; figures: Entry[] }[] = [
  { n: "4", folder: "src/draft-4/", figures: DRAFT_4 },
  { n: "3", folder: "src/draft-3/", figures: DRAFT_3 },
];

const fromUrl = () => new URLSearchParams(window.location.search).get("draft");

export default function App() {
  const [n, setN] = useState(() => fromUrl() ?? DRAFTS[0].n);
  const draft = DRAFTS.find((d) => d.n === n) ?? DRAFTS[0];

  useEffect(() => {
    const onPop = () => setN(fromUrl() ?? DRAFTS[0].n);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const show = (next: string) => {
    window.history.pushState(null, "", `?draft=${next}`);
    setN(next);
    window.scrollTo(0, 0);
  };

  return (
    <main className="mx-auto flex max-w-prose flex-col px-4 py-12">
      <h1 className="font-title text-3xl text-ink-900">Solving the First Protein Structures</h1>
      <nav className="mt-4 flex gap-1 font-ui text-sm" aria-label="Draft">
        {DRAFTS.map((d) => (
          <button
            key={d.n}
            type="button"
            aria-pressed={d.n === draft.n}
            onClick={() => show(d.n)}
            className={cn(
              "rounded-md px-3 py-1",
              d.n === draft.n ? "bg-ink-900 text-paper" : "text-ink-500 hover:bg-ink-100 hover:text-ink-900",
            )}
          >
            Draft {d.n}
          </button>
        ))}
      </nav>
      <p className="mt-4 font-ui text-sm text-ink-500">
        The figures of draft {draft.n}, in essay order. Each is a React component in{" "}
        <code className="font-mono">{draft.folder}</code>.
      </p>
      <ol className="mt-6 grid gap-1 font-mono text-xs text-ink-500 sm:grid-cols-2">
        {draft.figures.map((f, i) => (
          <li key={f.id}>
            <a className="hover:text-ink-900" href={`#${f.id}`}>
              {i + 1}. {f.file.split("/").pop()}
            </a>
          </li>
        ))}
      </ol>

      {draft.figures.map((f, i) => (
        <section key={`${draft.n} ${f.id}`} id={f.id} className="mt-16 flex flex-col border-t border-ink-200 pt-4">
          <p className="font-mono text-xs text-ink-500">
            {i + 1}. {f.file.includes("/") ? f.file : draft.folder + f.file} · {f.section}
            {f.side && ` · beside the prose, ${f.side} wide`}
          </p>
          <div className="flex flex-col" style={f.side ? { maxWidth: f.side } : undefined}>
            {f.figure}
          </div>
        </section>
      ))}
    </main>
  );
}
