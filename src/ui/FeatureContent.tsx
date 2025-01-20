import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { DescriptedCard } from "./DescriptedCard";
import { Card } from "./Card";

interface FeatureContentProps {
  heading?: string;
  isExercisesSection?: boolean;
  isTargetMusclesSection?: boolean;
  isBodyPartsSection?: boolean;
  isEquipmentsSection?: boolean;

  exploreLink?: boolean;
  exercises?: IExercise[];
  equipments?: IEquipment[];
  targetMuscles?: ITargetMuscle[];
  bodyParts?: IBodyPart[];
}

export const FeatureContent = ({
  heading,
  isExercisesSection,
  isTargetMusclesSection,
  isBodyPartsSection,
  isEquipmentsSection,
  exercises,
  equipments,
  targetMuscles,
  bodyParts,
}: FeatureContentProps): React.ReactNode => {
  const getExploreLink = () => {
    if (isExercisesSection) return "/exercises";
    if (isEquipmentsSection) return "/equipments";
    if (isBodyPartsSection) return "/body-parts";
    if (isTargetMusclesSection) return "/target-muscle";
    return "";
  };

  const componentVariants = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const headingVariants = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
  };

  const underlineVariants = {
    initial: { width: 0 },
    whileInView: { width: "100%" },
    transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
  };

  return (
    <motion.div {...componentVariants} className="space-y-10">
      {heading && (
        <motion.div {...headingVariants} className="mt-10 md:mt-20">
          <h2 className="w-fit text-xl font-semibold text-amber-700 dark:text-slate-200 mobile-sm:text-2xl md:text-5xl">
            {heading}
            <motion.div {...underlineVariants} className="h-1 bg-amber-700 dark:bg-slate-200" />
          </h2>
        </motion.div>
      )}

      <div className="flex items-center justify-between gap-x-20 overflow-x-auto xs:pb-10 xs:pl-3">
        {isExercisesSection &&
          exercises?.map((exercise: IExercise) => (
            <DescriptedCard
              key={exercise.id}
              id={exercise.id}
              gif={exercise.gifUrl}
              title={exercise.title}
              blog={exercise.blog}
            />
          ))}

        {isTargetMusclesSection &&
          targetMuscles?.map((muscle: ITargetMuscle) => (
            <Card
              key={muscle.targetMuscle}
              name={muscle.targetMuscle}
              image={muscle.imageUrl}
              path="target-muscle"
            />
          ))}

        {isBodyPartsSection &&
          bodyParts?.map((part: IBodyPart) => (
            <Card
              key={part.bodyPart}
              name={part.bodyPart}
              image={part.imageUrl}
              path="body-parts"
            />
          ))}

        {isEquipmentsSection &&
          equipments?.map((equipment: IEquipment) => (
            <Card
              key={equipment.equipment}
              name={equipment.equipment}
              image={equipment.imageUrl}
              path="equipments"
            />
          ))}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={getExploreLink()}>
                <CircleChevronRight className="cursor-pointer transition-colors duration-100 hover:scale-110 hover:text-amber-700 md:h-10 md:w-10" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="dark:bg-white dark:text-black">
              <p>Explore more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};
