import Spinner from "../ui/Spinner.tsx";
import Error from "./Error.tsx";
import Navbar from "../ui/Navbar.tsx";
import Sidebar from "../ui/Sidebar.tsx";
import MainTargetMuscle from "../features/TargetMuscle/MainTargetMuscle.tsx";
import { useTargetMuscle } from "../features/TargetMuscle/useTargetMuscle.tsx";

function TargetMuscle() {
  const { isLoading, error } = useTargetMuscle();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 h-[87vh]">
        <Sidebar />
        <MainTargetMuscle />
      </div>
    </>
  );
}
export default TargetMuscle;
