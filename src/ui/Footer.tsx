import React from "react";
import { FooterNavbar } from "@/ui/FooterNavbar.tsx";

export const Footer = (): React.ReactNode => {
  return (
    <>
      <section>
        <FooterNavbar />
        <div
          className={
            "flex items-center justify-center border-t border-t-slate-800 py-6 text-slate-300 xs:text-xs md:text-xl"
          }>
          © 2024 BodyWorks. Made with <span className={"px-2 text-2xl text-red-500"}> ♥</span> by
          Akshat.
        </div>
      </section>
    </>
  );
};
