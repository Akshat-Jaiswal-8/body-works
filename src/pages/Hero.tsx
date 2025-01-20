import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button.tsx";
import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero(): React.ReactNode {
  const isSmallDevice: boolean = useMediaQuery("only screen and (max-width : 767px)");
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
    <section className="mb-32 mt-[calc(var(--navbar-height)+4rem)]">
      <div className="h-full items-center justify-center md:flex">
        <div className="grid-cols-col-lg items-center justify-between gap-4 md:grid">
          <div>
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.1, delay: 0.25 }}
              className="mb-8 font-extrabold leading-snug tracking-wide text-amber-700 dark:text-slate-300 xs:text-4xl sm:text-6xl md:text-5xl lg:text-[4em] xl:text-[5rem]">
              Push
              <span className={"leading-snug text-amber-900 dark:text-pink-500"}>
                {" "}
                yourself harder{" "}
              </span>
              to become better
              <span className="inline-block overflow-hidden rounded-2xl xs:mt-4 xs:h-12 xs:w-[12rem] sm:ml-4 sm:h-14 sm:w-[16rem] md:mt-2 md:w-[16rem] lg:w-[20rem] xl:ml-4 xl:h-16">
                <motion.img
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1, delay: 1 }}
                  src={"/img.png"}
                  className="h-full w-full object-cover transition-transform duration-300"
                  alt="man with dumbbell"
                />
              </span>
            </motion.h1>
            <motion.div
              variants={contentVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.1, delay: 1 }}
              className="text-left text-xl font-semibold leading-10 text-amber-800 dark:text-slate-300 xs:mb-12 md:mb-16">
              <p>Are you lagging to find the best exercises for your muscles ?</p>
              <p>Now your wait is over with BodyWorks !</p>
              <p>Build your muscles with your favourite exercises!</p>
            </motion.div>

            <motion.div
              variants={contentVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.1, delay: 1 }}>
              <Button className="group transform-gpu bg-amber-700 px-4 py-4 text-xl font-medium text-slate-100 hover:scale-110 hover:bg-amber-800 dark:bg-pink-700 dark:text-slate-200 dark:hover:bg-pink-800">
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
                "mx-auto rounded-2xl shadow-2xl shadow-amber-600 dark:shadow-pink-600 md:h-[30rem] xl:h-[35rem]"
              }>
              <img
                src={"/hero.webp"}
                className={"rounded-2xl dark:grayscale md:h-[30rem] xl:h-[35rem]"}
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
