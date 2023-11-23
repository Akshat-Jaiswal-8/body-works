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
import Login from './ui/Login.tsx';
import Register from './ui/Register.tsx';
import Routines from './pages/Routines.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import RoutineCategory from './pages/RoutineCategory.tsx';
import Routine from './features/routine/Routine.tsx';
import BodyPart from './pages/BodyPart.tsx';
import Equipment from './pages/Equipment.tsx';
import TargetMuscle from './pages/TargetMuscle.tsx';
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
  }
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ClerkProvider publishableKey={clerkPubKey}>
        <div className='dark:bg-black'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/*' element={<Login />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<Register />} />
              <Route
                path='/exercises'
                element={
                  <>
                    <Exercises />
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
                path='/exercises/:exerciseId'
                element={
                  <>
                    <Exercise />
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
        </div>
      </ClerkProvider>
    </QueryClientProvider>
  );
}

export default App;
