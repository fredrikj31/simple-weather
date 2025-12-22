import { Button } from "@shadcn-ui/components/ui/button";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Header } from "./components/Header";

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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header onMenuClick={() => alert("TODO: Implement Menu/Sheet")} />
        <h1 className="text-5xl">Hello World!</h1>
        <p>Lorem Ipsum...</p>
        <Version />
        <Button>Click Me</Button>
      </QueryClientProvider>
    </>
  );
};
