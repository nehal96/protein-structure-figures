// Stands in for Next.js's `dynamic()`: loads the component lazily, in the browser only.
import { lazy, Suspense, type ComponentProps, type ComponentType } from "react";

export default function dynamic<C extends ComponentType<any>>(
  load: () => Promise<{ default: C }>,
  _options?: { ssr?: boolean },
) {
  const Lazy = lazy(load);
  return function Dynamic(props: ComponentProps<C>) {
    return (
      <Suspense fallback={null}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
