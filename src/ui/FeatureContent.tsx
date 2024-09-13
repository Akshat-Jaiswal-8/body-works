import React from "react";
import { IEquipments } from "@/services/apiEquipments.ts";
import { EquipmentsCard } from "@/features/Equipments/EquipmentsCard.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";
import { ITargetMuscles } from "@/services/apiTargetMuscles.ts";
import { IExercise } from "@/services/apiExercises.ts";
import { IBodyPart } from "@/services/apiBodyParts.ts";
import BodyPartsCard from "@/features/body-parts/BodyPartsCard.tsx";
import TargetMusclesCard from "@/features/TargetMuscle/TargetMusclesCard.tsx";
import { ExerciseCard } from "@/features/Exercises/ExerciseCard.tsx";
import { motion } from "framer-motion";

interface FeatureContentProps {
  bodyParts?: IBodyPart[];
  equipments?: IEquipments[];
  targetMuscles?: ITargetMuscles[];
  exercises?: IExercise[];
  heading: string;
}

export const FeatureContent = ({
  exercises,
  bodyParts,
  equipments,
  targetMuscles,
  heading,
}: FeatureContentProps): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <h2
        className={
          "text-3xl md:text-5xl text-amber-700 dark:text-slate-200 font-semibold underline mt-10 md:mt-20"
        }
      >
        {heading}
      </h2>
      <div
        className={
          "flex justify-between items-center gap-x-4 xs:overflow-x-scroll md:overflow-hidden pb-5"
        }
      >
        {exercises &&
          exercises?.map((exercise: IExercise) => {
            return (
              <ExerciseCard
                key={exercise.id}
                id={exercise.id}
                gif={exercise.gifUrl}
                title={exercise.title}
                blog={exercise.blog}
              />
            );
          })}
        {targetMuscles &&
          targetMuscles?.map((targetMuscle: ITargetMuscles) => {
            return (
              <TargetMusclesCard
                key={targetMuscle.targetMuscle}
                name={targetMuscle.targetMuscle}
                image={targetMuscle.imageUrl}
              />
            );
          })}
        {bodyParts &&
          bodyParts?.map((bodyPart: IBodyPart) => {
            return (
              <BodyPartsCard
                key={bodyPart.bodyPart}
                name={bodyPart.bodyPart}
                image={bodyPart.imageUrl}
              />
            );
          })}

        {equipments &&
          equipments?.map((equipment: IEquipments) => {
            return (
              <EquipmentsCard
                key={equipment.equipment}
                name={equipment.equipment}
                image={equipment.imageUrl}
              />
            );
          })}
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  to={`${exercises ? "exercises" : equipments ? "/equipments" : bodyParts ? "/body-parts" : targetMuscles ? "/target-muscle" : ""}`}
                >
                  <CircleChevronRight
                    className={
                      "cursor-pointer hover:text-amber-700 transition-colors duration-100 hover:scale-110 md:h-10 md:w-10"
                    }
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className={"dark:bg-white dark:text-black"}
                side={"top"}
              >
                <p>Explore more</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};
