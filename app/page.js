import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContestantsSection from "./components/ContestantsSection";
import Gallery from "./components/Gallery";
import { superFetch } from "@/actions";

export default async function Home() {
  
  const session = await superFetch(`seasons/current`);
  const data = await superFetch(`contestants/current?pages=1&limit=8`);

    var contestants;
    var pageData;
    if (data && Array.isArray(data.contestants)) {
        contestants = data.contestants;
        pageData = data.pagination; 
    } else {
        contestants = null;
        pageData = null;
    }

    console.log(pageData);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero session={session} />
      <ContestantsSection session={session} contestants={contestants} pageData={pageData}/>
      <Gallery />
    </main>
  );
}