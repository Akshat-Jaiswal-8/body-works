import React from "react";
import Hero from "@/pages/Hero.tsx";
import { Features } from "@/ui/Features.tsx";
import { motion } from "framer-motion";
import { UserTestimonials } from "@/ui/UserTestimonials.tsx";
import { Footer } from "@/ui/Footer.tsx";

export const Home = (): React.ReactNode => {
  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <Features />
      <UserTestimonials />
      <Footer />
    </motion.div>
  );
};
