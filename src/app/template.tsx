"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <>{children}</>
    </>
  );
}
