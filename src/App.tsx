import Hero from './pages/Hero.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.tsx';
import Exercises from './pages/Exercises.tsx';
import Equipments from './pages/Equipments.tsx';
import TargetMuscles from './pages/TargetMuscles.tsx';
import BodyParts from './pages/BodyParts.tsx';
import Exercise from './pages/Exercise.tsx';
import Routines from './pages/Routines.tsx';
import RoutineCategory from './pages/RoutineCategory.tsx';
import Routine from './features/routine/Routine.tsx';
import BodyPart from './pages/BodyPart.tsx';
import Equipment from './pages/Equipment.tsx';
import TargetMuscle from './pages/TargetMuscle.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import Navbar from '@/ui/Navbar.tsx';

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
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route
              path='/exercises'
              element={
                <>
                  <Exercises />
                </>
              }
            />
            <Route
              path='/exercises/:exerciseId'
              element={
                <>
                  <Exercise />
                </>
              }
            />
            <Route
              path='/equipments'
              element={
                <>
                  <Equipments />
                </>
              }
            />
            <Route
              path='/equipments/:equipment'
              element={
                <>
                  <Equipment />
                </>
              }
            />
            <Route
              path='/target-muscle'
              element={
                <>
                  <TargetMuscles />
                </>
              }
            />
            <Route
              path='/target-muscle/:targetMuscle'
              element={
                <>
                  <TargetMuscle />
                </>
              }
            />
            <Route
              path='/body-parts'
              element={
                <>
                  <BodyParts />
                </>
              }
            />
            <Route
              path='/body-parts/:bodypart'
              element={
                <>
                  <BodyPart />
                </>
              }
            />

            <Route
              path='/routine-category'
              element={
                <>
                  <RoutineCategory />
                </>
              }
            />
            <Route
              path='/routines/:routineName'
              element={
                <>
                  <Routines />
                </>
              }
            />
            <Route
              path='/routines/routine/:id'
              element={
                <>
                  <Routine />
                </>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
