import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { WeatherSummary } from "./components/WeatherSummary";
import { WeatherDetailCard } from "./components/WeatherDetailCard";
import { Droplet, Eye, Gauge, Wind } from "lucide-react";

const fetchVersion = async (): Promise<{ version: string }> => {
  const response = await fetch("/version.json");
  return response.json();
};

export const Version = () => {
  const { data } = useQuery({ queryKey: ["version"], queryFn: fetchVersion });

  return <p>Version: {data?.version ?? ""}</p>;
};

export const App = () => {
  const queryClient = new QueryClient();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

        <div className="flex flex-col gap-4 p-4">
          <WeatherSummary />
          <div className="grid grid-cols-2 gap-4">
            <WeatherDetailCard
              title="Wind Speed"
              icon={Wind}
              value="4.12 m/s"
              subValue="250°"
            />
            <WeatherDetailCard title="Humidity" icon={Droplet} value="72%" />
            <WeatherDetailCard title="Visibility" icon={Eye} value="10.0 km" />
            <WeatherDetailCard title="Pressure" icon={Gauge} value="1013 hPa" />
          </div>
        </div>

        <Version />
      </QueryClientProvider>
    </>
  );
};
