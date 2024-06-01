import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/user/homePage/HeroSection";
import MainBanner from "@/components/user/homePage/MainBanner";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Navbar/>
  <MainBanner/>
  <HeroSection/>
  </>
  );
}
