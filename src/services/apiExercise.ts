import axios from "axios";

const getExercise = async (props: string) => {
  const exerciseId: string = props;
  const exercise = await axios.get(
    `https://body-works.vercel.app/api/exercises/${exerciseId}`,
  );
  return exercise.data;
};

export { getExercise };
