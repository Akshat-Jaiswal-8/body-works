import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider.tsx";

import { Navbar } from "@/ui/Navbar.tsx";

import { AnimatedRoutes } from "@/components/AnimatedRoutes.tsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
