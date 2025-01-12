import axios from 'axios';

interface IRoutineCategory {
  title: string;
  imageUrl: string;
}

const getRoutineCategories = async () => {
    const routineCategory = await axios.get(`https://body-works-api.up.railway.app/routines/filters`);
    return routineCategory.data.data;
};

export { getRoutineCategories };
export type { IRoutineCategory };
