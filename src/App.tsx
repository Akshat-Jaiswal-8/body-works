import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Hero from './pages/Hero.tsx';
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
import Transition from '@/Transition.tsx';

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
            <Route path='/' element={<Transition Component={<Hero />} />} />
            <Route
              path='/exercises'
              element={
                <>
                  <Transition Component={<Exercises />} />
                </>
              }
            />
            <Route
              path='/exercises/:exerciseId'
              element={
                <>
                  <Transition Component={<Exercise />} />
                </>
              }
            />
            <Route
              path='/equipments'
              element={
                <>
                  <Transition Component={<Equipments />} />
                </>
              }
            />
            <Route
              path='/equipments/:equipment'
              element={
                <>
                  <Transition Component={<Equipment />} />
                </>
              }
            />
            <Route
              path='/target-muscle'
              element={
                <>
                  <Transition Component={<TargetMuscles />} />
                </>
              }
            />
            <Route
              path='/target-muscle/:targetMuscle'
              element={
                <>
                  <Transition Component={<TargetMuscle />} />
                </>
              }
            />
            <Route
              path='/body-parts'
              element={
                <>
                  <Transition Component={<BodyParts />} />
                </>
              }
            />
            <Route
              path='/body-parts/:bodypart'
              element={
                <>
                  <Transition Component={<BodyPart />} />
                </>
              }
            />

            <Route
              path='/routine-category'
              element={
                <>
                  <Transition Component={<RoutineCategory />} />={' '}
                </>
              }
            />
            <Route
              path='/routines/:routineName'
              element={
                <>
                  <Transition Component={<Routines />} />
                </>
              }
            />
            <Route
              path='/routines/routine/:id'
              element={
                <>
                  <Transition Component={<Routine />} />
                </>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
