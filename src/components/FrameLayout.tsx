import { ReactNode } from "react";

interface FrameLayoutProps {
  children: ReactNode;
  header?: ReactNode;
}

const FrameLayout = ({ children, header }: FrameLayoutProps) => {
  return (
    <div className="fixed inset-0 bg-foreground p-2 md:p-2.5 flex flex-col">
      {header && (
        <div className="flex-shrink-0">
          {header}
        </div>
      )}
      <div className="relative flex-1 overflow-hidden rounded-[16px] md:rounded-[24px] bg-background">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FrameLayout;
