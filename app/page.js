'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestantsSection from "@/components/ContestantsSection";
import Gallery from "@/components/Gallery";
import { cache, useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Footer from "@/components/Footer";

export default function Home() {

  const [szn, setSzn] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [contestants, setContestants] = useState();
  const [pageData, setPageData] = useState();
  const [data, setData] = useState();

  // const session = await fetchData(`seasons/current`);
  // const data = await fetchData(`contestants/current?page=1&limit=5`);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/seasons/current`)
    .then((res) => res.json())
    .then((data) => setSzn(data));
  }, [])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/contestants/current?page=1&limit=5`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  }, [])

  if(!szn || !data) {
    return (
      <div className="h-screen w-full bg-black text-white flex flex-col gap-1 justify-center items-center">
        <Spinner />
        <span className="text-sm text-gray-500">Loading</span>
      </div>
    )
  }

  return (
    <main className="overflow-hidden">
        <Navbar />
        <Hero session={szn} />
        <ContestantsSection session={szn} contestants={data.contestants} pageData={data.pagination}/>
        <Gallery />
        <Footer />
    </main>
  );
}
