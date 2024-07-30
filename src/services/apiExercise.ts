import axios from "axios";

const getExercise = async (exerciseId: string | undefined) => {
  const exercise = await axios.get(`https://body-works-api.up.railway.app/exercises/${exerciseId}`);
  return exercise.data.data;
};

export { getExercise };
