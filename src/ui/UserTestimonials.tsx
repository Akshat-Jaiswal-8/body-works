import React from "react";
import { motion } from "framer-motion";
import { TestimonialCards } from "@/components/TestimonialCards.tsx";

export const UserTestimonials = (): React.ReactNode => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0, y: 200 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={"md:h-[50vh]"}>
      <h1
        className={
          "mt-20 bg-gradient-to-br from-amber-800 to-amber-600 bg-clip-text font-bold text-transparent dark:from-slate-200 dark:to-slate-300 xs:text-2xl md:text-6xl lg:text-7xl"
        }>
        User Testimonials
      </h1>
      <TestimonialCards />
    </motion.section>
  );
};
