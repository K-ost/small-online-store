import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockQueryClient = new QueryClient();
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <HashRouter>
      <QueryClientProvider client={mockQueryClient}>{children}</QueryClientProvider>
    </HashRouter>
  );
};
