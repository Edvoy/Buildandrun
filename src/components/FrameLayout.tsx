import { ReactNode } from "react";

interface FrameLayoutProps {
  children: ReactNode;
}

const FrameLayout = ({ children }: FrameLayoutProps) => {
  return (
    <div className="fixed inset-0 bg-foreground p-3 md:p-4">
      <div className="relative w-full h-full overflow-hidden rounded-[20px] md:rounded-[32px] bg-background">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FrameLayout;
