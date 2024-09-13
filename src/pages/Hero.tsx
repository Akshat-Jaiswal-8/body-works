import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button.tsx";
import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero(): React.ReactNode {
  const isSmallDevice: boolean = useMediaQuery(
    "only screen and (max-width : 767px)",
  );
  const headingVariants = {
    hidden: { opacity: 0, x: 0, y: 40 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -40, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <section className="">
      <div className="h-full relative md:flex items-center justify-center">
        <div className="container mx-auto mt-20 items-center md:grid grid-cols-col-lg gap-4 justify-between">
          <div>
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.1, delay: 0.25 }}
              className="xs:text-5xl sm:text-6xl md:text-5xl xs:mt-20 lg:text-[4em] xl:text-[5rem] font-extrabold text-amber-700 dark:text-slate-300 mb-8"
            >
              Push
              <span className={"text-amber-900 dark:text-pink-500"}>
                {" "}
                yourself harder{" "}
              </span>
              to become better
              <span className="xs:w-[12rem] xs:h-12 xs:mt-4 sm:ml-4 sm:w-[16rem] sm:h-14 md:w-[16rem] md:mt-2 lg:w-[20rem] xl:h-16 xl:ml-4 inline-block rounded-2xl overflow-hidden">
                <motion.img
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1, delay: 1 }}
                  src={"/img.png"}
                  className="w-full h-full object-cover transition-transform duration-300"
                  alt="man with dumbbell"
                />
              </span>
            </motion.h1>
            <motion.div
              variants={contentVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.1, delay: 1 }}
              className="xs:mb-12 md:mb-16 text-left text-amber-800 font-semibold dark:text-slate-300 text-xl leading-10"
            >
              <p>
                Are you lagging to find the best exercises for your muscles ?
              </p>
              <p>Now your wait is over with BodyWorks !</p>
              <p>Build your muscles with your favourite exercises!</p>
            </motion.div>

            <motion.div
              variants={contentVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.1, delay: 1 }}
            >
              <Button className="text-xl font-medium group bg-amber-700 hover:bg-amber-800 dark:bg-pink-700 dark:hover:bg-pink-800 text-slate-100 dark:text-slate-200 px-4 py-4 hover:scale-110 transform-gpu">
                <Link to={"/exercises"}>
                  <span className={"flex items-center justify-center gap-x-2"}>
                    Explore for free{" "}
                    <MoveRight
                      className={"animate-bounce-right"}
                      size={20}
                      strokeWidth={2.5}
                      absoluteStrokeWidth
                    />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
          {!isSmallDevice && (
            <motion.div
              variants={imageVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.2, delay: 0.8 }}
              className={
                "md:h-[30rem] xl:h-[35rem] mx-auto shadow-2xl shadow-amber-600 dark:shadow-pink-600 rounded-2xl"
              }
            >
              <img
                src={"/hero.webp"}
                className={
                  "md:h-[30rem] xl:h-[35rem] dark:grayscale rounded-2xl"
                }
                loading={"eager"}
                alt={"man with dumbell"}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
