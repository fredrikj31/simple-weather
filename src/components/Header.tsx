import { Button } from "@shadcn-ui/components/ui/button";
import { Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}
export const Header = ({ onMenuClick, onSearchClick }: HeaderProps) => {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <div className="h-5 w-20" />
        <h1 className="text-xl font-semibold">Simple Weather</h1>
        <div className="flex items-center gap-1 w-20">
          <Button variant="ghost" size="icon" onClick={onSearchClick}>
            <Search className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
