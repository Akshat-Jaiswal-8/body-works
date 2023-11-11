import Hero from './pages/Hero.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.tsx';
import Exercises from './pages/Exercises.tsx';
import Equipments from './pages/Equipments.tsx';
import TargetMuscle from './pages/TargetMuscle.tsx';
import BodyParts from './pages/BodyParts.tsx';
import Exercise from './features/Exercise/Exercise.tsx';
import Login from './ui/Login.tsx';
import Register from './ui/Register.tsx';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';
import RoutineCategory from './pages/RoutineCategory.tsx';
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
                  <SignedIn>
                    <Exercises />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path='/equipments'
              element={
                <>
                  <SignedIn>
                    <Equipments />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path='/target-muscle'
              element={
                <>
                  <SignedIn>
                    <TargetMuscle />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path='/body-parts'
              element={
                <>
                  <SignedIn>
                    <BodyParts />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path='/exercises/:exerciseId'
              element={
                <>
                  <SignedIn>
                    <Exercise />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path='/routine-category'
              element={
                <>
                  <SignedIn>
                    <RoutineCategory />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
    </QueryClientProvider>
  );
}

export default App;
