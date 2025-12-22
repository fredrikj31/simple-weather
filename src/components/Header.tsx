import { Button } from "@shadcn-ui/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}
export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <div className="size-9" />
        <h1 className="text-xl font-semibold">Simple Weather</h1>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
