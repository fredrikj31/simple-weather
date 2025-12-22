import { Card } from "@shadcn-ui/components/ui/card";
import { MapPin } from "lucide-react";

export const WeatherSummary = () => {
  return (
    <Card className="overflow-hidden p-4 flex flex-col gap-1">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span>London, GB</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <div className="text-6xl font-light tracking-tight">15°</div>
          <div className="mt-2 text-lg capitalize text-muted-foreground">
            Few Clouds
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Feels like 15°
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={"https://openweathermap.org/img/wn/02d@4x.png"}
            alt="Cloudy"
            className="h-24 w-24"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
        <div>
          <span className="text-muted-foreground">High:</span>
          <span className="ml-2 font-medium">17°</span>
        </div>
        <div>
          <span className="text-muted-foreground">Low:</span>
          <span className="ml-2 font-medium">13°</span>
        </div>
      </div>
    </Card>
  );
};
