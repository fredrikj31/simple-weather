import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { WeatherSummary } from "./components/WeatherSummary";

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

        <div className="p-4">
          <WeatherSummary />
        </div>

        <Version />
      </QueryClientProvider>
    </>
  );
};
