interface IworkoutSummary {
  MainGoal: string;
  WorkoutType: string;
  TrainingLevel: string;
  ProgramDuration: string;
  DaysPerWeek: number;
  TimePerWorkout: string;
  EquipmentRequired: string;
  TargetGender: string;
}

const WorkoutSummaryTable = ({ data }: { data: IworkoutSummary }) => {
  const keys: (keyof IworkoutSummary)[] = Object.keys(data) as (keyof IworkoutSummary)[];

  return (
    <table className='w-full xl:text-xl'>
      <tbody>
        {keys.map((key) => (
          <tr className='border-b last:border-none border-dashed border-amber-900 dark:border-gray-600' key={key}>
            <td className='p-4 border-r border-dashed dark:text-gray-200 text-amber-700 font-semibold font-montserrat dark:border-gray-600 border-amber-900'>
              {key}
            </td>
            <td className='p-4 text-amber-70 text-amber-700 dark:text-gray-200 font-semibold font-montserrat'>
              {data[key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutSummaryTable;
