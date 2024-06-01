import React from "react";
import { SignUp } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="w-[80%] mx-auto  mt-10 flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default page;
