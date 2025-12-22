import { Card } from "@shadcn-ui/components/ui/card";
import type { ElementType } from "react";

interface WeatherDetailCardProps {
  title: string;
  icon: ElementType;
  value: string;
  subValue?: string;
}
export const WeatherDetailCard = ({
  title,
  icon: Icon,
  value,
  subValue,
}: WeatherDetailCardProps) => {
  return (
    <Card className="overflow-hidden p-4 flex flex-col gap-1">
      <div className="flex items-start gap-2">
        <div className="rounded-lg bg-muted p-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <span className="text-xs text-muted-foreground">{title}</span>
          <div className="flex flex-row gap-1 items-center">
            <span className="text-lg font-medium">{value}</span>
            {subValue && (
              <span className="text-xs text-muted-foreground h-7 flex items-center">
                {subValue}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
