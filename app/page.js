import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContestantsSection from "./components/ContestantsSection";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <ContestantsSection />
      <Gallery />
    </main>
  );
}