"use client";

import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section
      className={cn(
        "min-h-[calc(100dvh-4rem)] w-full clear-both pt-24 md:pt-32 pb-12 grid place-items-center",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.displayName = "Section";

export default Section;
