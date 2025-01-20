import React from "react";
import { motion } from "framer-motion";
import useExercises from "@/hooks/useExercises.tsx";
import useEquipments from "@/hooks/useEquipments.tsx";
import { useBodyParts } from "@/hooks/useBodyParts.tsx";
import useTargetMuscles from "@/hooks/useTargetMuscles.tsx";
import { FeatureContent } from "@/ui/FeatureContent.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Skeleton } from "@/components/ui/skeleton.tsx";

const MOBILE_ITEMS_COUNT = 2;
const DESKTOP_ITEMS_COUNT = 3;

export const Features = (): React.ReactNode => {
  const isSmallDevice: boolean = useMediaQuery("only screen and (max-width : 768px)");
  const itemsCount = isSmallDevice ? MOBILE_ITEMS_COUNT : DESKTOP_ITEMS_COUNT;

  const { exercises, isLoading: exercisesLoading } = useExercises(itemsCount);
  const { equipments, isLoading: equipmentsLoading } = useEquipments(itemsCount);
  const { bodyParts, isLoading: bodyPartsLoading } = useBodyParts(itemsCount);
  const { targetMuscle, isLoading: targetMuscleLoading } = useTargetMuscles(itemsCount);

  const isLoading =
    exercisesLoading || equipmentsLoading || bodyPartsLoading || targetMuscleLoading;

  const sectionVariants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
  };

  const LoadingSkeleton = () => {
    return (
      <div className="space-y-8">
        <Skeleton className="h-16 w-1/2" />
        <div className="grid grid-cols-3 gap-x-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-80 w-full" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.section {...sectionVariants}>
      <h1
        className={
          "my-10 bg-gradient-to-br from-amber-800 to-amber-600 bg-clip-text py-3 font-bold text-transparent dark:from-slate-200 dark:to-slate-300 xs:text-4xl md:text-6xl lg:text-7xl"
        }>
        Body Works at a glance
      </h1>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="space-y-20">
          <FeatureContent
            exercises={exercises?.data}
            isExercisesSection
            heading={"1300+ Exercises"}
          />
          <FeatureContent
            bodyParts={bodyParts?.data}
            isBodyPartsSection
            heading={"10+ Body Parts"}
          />
          <FeatureContent
            targetMuscles={targetMuscle?.data}
            isTargetMusclesSection
            heading={"20+ Target Muscles"}
          />
          <FeatureContent
            equipments={equipments?.data}
            isEquipmentsSection
            heading={"30+ Equipments"}
          />
        </div>
      )}
    </motion.section>
  );
};
