import React from "react";
import { motion } from "framer-motion";
import { TestimonialCards } from "@/components/TestimonialCards.tsx";

export const UserTestimonials = (): React.ReactNode => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={"container md:h-[50vh]"}
    >
      <h1
        className={
          "xs:text-2xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-800 to-amber-600 dark:from-slate-200 dark:to-slate-300 mt-20"
        }
      >
        User Testimonials
      </h1>
      <TestimonialCards />
    </motion.section>
  );
};
