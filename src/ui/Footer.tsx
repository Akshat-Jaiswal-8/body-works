import React from "react";
import { FooterNavbar } from "@/ui/FooterNavbar.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Footer = (): React.ReactNode => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      <section>
        {isSmallDevice && (
          <div className={"fixed bottom-5 right-0"}>
            <FooterNavbar />
          </div>
        )}
        {!isSmallDevice && <FooterNavbar />}
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
