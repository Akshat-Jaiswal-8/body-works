import React from "react";
import { FooterNavbar } from "@/ui/FooterNavbar.tsx";

export const Footer = (): React.ReactNode => {
  return (
    <>
      <section>
        <FooterNavbar />
        <div
          className={
            "flex items-center justify-center border-t border-t-slate-800 py-6 xs:text-xs md:text-xl text-slate-300"
          }
        >
          © 2024 BodyWorks. Made with{" "}
          <span className={"text-red-500 text-2xl px-2"}> ♥</span> by Akshat.
        </div>
      </section>
    </>
  );
};
