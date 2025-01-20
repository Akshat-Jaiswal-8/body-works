import { Footer } from "@/ui/Footer.tsx";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="container flex h-screen flex-col justify-between overflow-x-hidden">
      <div className="flex flex-grow items-center justify-center px-4 pt-32">
        <div className="max-w-md text-center">
          <h2 className="mb-4 text-[48px] font-extrabold text-amber-700 dark:text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
            404
          </h2>

          <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-300 sm:text-xl lg:text-2xl">
            Oops! That page can't be found.
          </h4>
          <p className="mb-8 text-sm text-gray-700 dark:text-gray-400 sm:text-base lg:text-lg">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>

          <Link
            to="/#"
            className="inline-block rounded-lg border border-amber-700 px-8 py-3 text-center text-base text-amber-700 transition hover:bg-amber-700 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
            Go to Home
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PageNotFound;
