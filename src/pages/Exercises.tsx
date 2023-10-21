import useExercises  from "../features/Exercises/useExercises.tsx";
import Spinner from "../ui/Spinner.tsx";
import Error  from "./Error.tsx";
import  {IExercises } from "../services/apiExercises.ts";
import Navbar from "../ui/Navbar.tsx";

function Exercises() {

  const {isLoading , exercises , error } = useExercises();
  if (isLoading){
    return <Spinner />;
  }
  if (error){
    return  <Error/>
  }
  return (
    <>
      <div className="grid grid-cols-5 grid-flow-col row-span-full ">
        <aside className="row-span-2 h-[100vh] p-14 w-full text-white border-white">
          <img src="/public/download.png" className="rounded-full mb-6" alt="logo"/>
          <div className="flex cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-filter"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
          <span className="text-gray-400 ml-2 font-bold font-openSans">Filter</span>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Exercises;
