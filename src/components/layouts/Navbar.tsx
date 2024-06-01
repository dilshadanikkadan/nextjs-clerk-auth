import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const { userId } = auth();
  console.log(userId);

  return (
    <div className="h-[80px] w-[100%] flex font-primary  items-center  justify-center   mx-auto shadow-sm ">
      <div className="left flex-[2] font-semibold text-xl ml-10">
        <Link href="/" className="text-yellow">
          Quiz <span className="font-semibold text-gray-500">master</span>
        </Link>
      </div>
      <div className="cenetr flex-[8] flex gap-10 text-gray-600 font-semibold   items-center justify-center  ">
        {/* <Link href="/admin/addquiz">AddQuiz</Link> */}
        <Link href="/">Home</Link>
        <Link className="" href="/quizez">
          Quizes
        </Link>
        <Link className="" href="/admin">
          DashBoard
        </Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="right flex items-center text-gray-500   gap-4  justify-center flex-[4] font-semibold">
        {!userId ? (
          <Link href="/sign-in">Login</Link>
        ) : (
          <button className="bg-primary py-2 px-4 text-white rounded-lg">
            Log Out
          </button>
        )}
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
