import { motion } from "framer-motion";
import React from "react";
import { IExercise } from "@/services/apiExercises.ts";
import { useExercises } from "@/features/Exercises/useExercises.tsx";
import { useEquipments } from "@/features/Equipments/useEquipments.tsx";
import { useBodyParts } from "@/features/body-parts/useBodyParts.tsx";
import { useTargetMuscles } from "@/features/TargetMuscle/useTargetMuscles.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FeatureContent } from "@/ui/FeatureContent.tsx";

export const Features = (): React.ReactNode => {
  const isSmallDevice: boolean = useMediaQuery(
    "only screen and (max-width : 768px)",
  );
  const {
    exercises,
  }: {
    exercises: IExercise[];
  } = useExercises(isSmallDevice ? 2 : 3, 1);
  let { equipments } = useEquipments();
  let { bodyParts } = useBodyParts();
  let { targetMuscle } = useTargetMuscles();

  if (isSmallDevice && bodyParts && equipments && targetMuscle && exercises) {
    bodyParts = bodyParts?.slice(0, 2);
    equipments = equipments?.slice(0, 2);
    targetMuscle = targetMuscle?.slice(0, 2);
  } else {
    bodyParts = bodyParts?.slice(0, 4);
    equipments = equipments?.slice(0, 4);
    targetMuscle = targetMuscle?.slice(0, 4);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={"container my-20"}
    >
      <h1
        className={
          "xs:text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-800 to-amber-600 dark:from-slate-200 dark:to-slate-300"
        }
      >
        Body Works at a glance
      </h1>
      <FeatureContent exercises={exercises} heading={"1300+ Exercises"} />
      <FeatureContent equipments={equipments} heading={"30+ Equipments"} />
      <FeatureContent bodyParts={bodyParts} heading={"10+ Body Parts"} />
      <FeatureContent
        targetMuscles={targetMuscle}
        heading={"20+ Target Muscles"}
      />
    </motion.section>
  );
};
