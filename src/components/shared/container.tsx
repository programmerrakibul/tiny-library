"use client";

import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden container mx-auto px-3.5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";

export default Container;
