import axios from 'axios';

interface IRoutineCategory {
  title: string;
  imageUrl: string;
}

const getRoutineCategories = async () => {
  const routineCategory = await axios.get(
    `https://body-works.vercel.app/api/routine/filter`,
  );
  const allRoutineCategory = routineCategory.data.category;
  console.log(allRoutineCategory);
  return allRoutineCategory;
};

export { getRoutineCategories };
export type { IRoutineCategory };
