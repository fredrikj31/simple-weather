import { Button } from "@shadcn-ui/components/ui/button";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@shadcn-ui/components/ui/command";
import { useState } from "react";

interface SearchPopup {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSearch: (input: string) => void;
}
export const SearchPopup = ({
  isOpen,
  onOpenChange,
  onSearch,
}: SearchPopup) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Type a city to search e.g. Copenhagen, DK"
        value={searchValue}
        onValueChange={(value) => setSearchValue(value)}
      />
      <Button variant="ghost" onClick={() => onSearch(searchValue)}>
        Search
      </Button>
      <CommandList>
        <CommandGroup heading="Recent Locations">
          <CommandItem onSelect={(value) => onSearch(value)}>
            London, GB
          </CommandItem>
          <CommandItem onSelect={(value) => onSearch(value)}>
            New York, US
          </CommandItem>
          <CommandItem onSelect={(value) => onSearch(value)}>
            Copenhagen, DK
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
