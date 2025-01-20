interface IExercise {
  name: string;
  title: string;
  target: string;
  "muscles worked": string;
  bodyPart: string;
  equipment: string;
  id: string;
  blog: string;
  images: string[];
  gifUrl: string;
  videos: string[];
  keywords: string[];
}

interface IExerciseData {
  totalExercises: number;
  totalPages: number;
  data: IExercise[];
}

interface IExerciseResponse {
  data: IExercise;
}

interface IEquipment {
  equipment: string;
  imageUrl: string;
}

interface IEquipmentData {
  totalEquipments: number;
  data: IEquipment[];
}

interface IBodyPart {
  bodyPart: string;
  imageUrl: string;
}

interface IBodyPartData {
  totalBodyParts: number;
  data: IBodyPart[];
}

interface ITargetMuscle {
  targetMuscle: string;
  imageUrl: string;
}

interface ITargetMuscleData {
  totalTargetMuscles: number;
  data: ITargetMuscle[];
}

interface IRoutineCategory {
  title: string;
  imageUrl: string;
}

interface IRoutineCategoryResponse {
  data: IRoutineCategory[];
  totalRoutinesFilter: number;
}

interface IRoutine {
  category: string[];
  routine: {
    routine_title: string;
    routine_description: string;
    routine_imageUrl: string;
    workout_plan: { heading: string; day_plan: string }[];
    workout_summary: {
      MainGoal: string;
      WorkoutType: string;
      TrainingLevel: string;
      ProgramDuration: string;
      DaysPerWeek: number;
      TimePerWorkout: string;
      EquipmentRequired: string;
      TargetGender: string;
    };
  };
  id: number;
}

interface IRoutinesResponse {
  totalPages: number;
  totalRoutines: number;
  finalData: IRoutine[];
}
