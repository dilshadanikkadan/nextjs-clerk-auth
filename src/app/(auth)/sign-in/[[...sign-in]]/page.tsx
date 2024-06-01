import React from "react";
import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="w-[80%] mx-auto  mt-10 flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default page;
