import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
