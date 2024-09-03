import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "@/ui/Home.tsx";
import Transition from "@/Transition.tsx";
import Exercises from "@/pages/Exercises.tsx";
import Exercise from "@/pages/Exercise.tsx";
import Equipments from "@/pages/Equipments.tsx";
import Equipment from "@/pages/Equipment.tsx";
import TargetMuscles from "@/pages/TargetMuscles.tsx";
import TargetMuscle from "@/pages/TargetMuscle.tsx";
import BodyParts from "@/pages/BodyParts.tsx";
import BodyPart from "@/pages/BodyPart.tsx";
import RoutineCategory from "@/pages/RoutineCategory.tsx";
import Routines from "@/pages/Routines.tsx";
import Routine from "@/features/routine/Routine.tsx";
import PageNotFound from "@/pages/PageNotFound.tsx";
import React from "react";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = (): React.ReactNode => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercises"
          element={
            <>
              <Transition Component={<Exercises />} />
            </>
          }
        />
        <Route
          path="/exercises/:exerciseId"
          element={
            <>
              <Transition Component={<Exercise />} />
            </>
          }
        />
        <Route
          path="/equipments"
          element={
            <>
              <Transition Component={<Equipments />} />
            </>
          }
        />
        <Route
          path="/equipments/:equipment"
          element={
            <>
              <Transition Component={<Equipment />} />
            </>
          }
        />
        <Route
          path="/target-muscle"
          element={
            <>
              <Transition Component={<TargetMuscles />} />
            </>
          }
        />
        <Route
          path="/target-muscle/:targetMuscle"
          element={
            <>
              <Transition Component={<TargetMuscle />} />
            </>
          }
        />
        <Route
          path="/body-parts"
          element={
            <>
              <Transition Component={<BodyParts />} />
            </>
          }
        />
        <Route
          path="/body-parts/:bodypart"
          element={
            <>
              <Transition Component={<BodyPart />} />
            </>
          }
        />

        <Route
          path="/routine-category"
          element={
            <>
              <Transition Component={<RoutineCategory />} />={" "}
            </>
          }
        />
        <Route
          path="/routines/:routineName"
          element={
            <>
              <Transition Component={<Routines />} />
            </>
          }
        />
        <Route
          path="/routines/routine/:id"
          element={
            <>
              <Transition Component={<Routine />} />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
