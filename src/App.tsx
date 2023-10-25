import Hero from "./pages/Hero.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";
import Exercises from "./pages/Exercises.tsx";
import Equipments from "./pages/Equipments.tsx";
import TargetMuscle from "./pages/TargetMuscle.tsx";
import BodyParts from "./pages/BodyParts.tsx";
import Exercise from "./features/Exercise/Exercise.tsx";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/target-muscle" element={<TargetMuscle />} />
          <Route path="/body-parts" element={<BodyParts />} />
          <Route path="/exercises/:exerciseId" element={<Exercise />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
