import axios from 'axios';

interface IRoutineCategory {
  title: string;
  imageUrl: string;
}

const getRoutineCategories = async () => {
  const routineCategory = await axios.get(
    `https://body-works.vercel.app/api/routine/category`,
  );
  const allRoutineCategory = routineCategory.data.data;
  return allRoutineCategory;
};

export { getRoutineCategories };
export type { IRoutineCategory };
