"use client";

import { Button } from "@/components/ui/button";
import { HelpCircle, MoveLeft } from "lucide-react";
import Link from "next/link";

interface NotFoundProps {
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
}

const NotFoundComponent = ({
  title,
  description,
  actionText,
  actionHref,
}: NotFoundProps) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-16 text-center select-none overflow-hidden">
      {/* Decorative Background Art Layer */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
        <div className="text-[24vw] font-black tracking-tighter">404</div>
      </div>

      {/* Modern Creative Icon Cluster */}
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/60 ring-1 ring-border shadow-inner">
        <HelpCircle className="h-10 w-10 text-muted-foreground stroke-[1.5]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-primary/80"></span>
        </span>
      </div>

      {/* Text Context Stack */}
      <div className="max-w-md space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {title}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[90%] mx-auto">
          {description}
        </p>
      </div>

      {/* Signature & Interactive Button Group */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {actionText && actionHref && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group gap-2 transition-all"
          >
            <Link href={actionHref}>
              <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {actionText}
            </Link>
          </Button>
        )}

        <span className="text-xs font-medium tracking-wide text-muted-foreground/60 italic mt-2">
          ~ Tiny Library
        </span>
      </div>
    </div>
  );
};

export default NotFoundComponent;
