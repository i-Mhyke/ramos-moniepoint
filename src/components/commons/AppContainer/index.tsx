import { cn } from "@/utils/utils";
import React from "react";


type AppContainerProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<"div">;

export const AppContainer = React.forwardRef<HTMLDivElement, AppContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn('container max-w-[1440px] mx-auto px-4 sm:px-7 md:px-10 lg:px-8 xl:px-14', className)}
      >
        {children}
      </div>
    );
  }
);

AppContainer.displayName = "AppContainer";
