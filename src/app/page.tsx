'use client'
import { DataControl } from "@/components/layouts/DataControl";
import { EfficiencySection } from "@/components/layouts/EfficiencySection";
import { GetStartedSection } from "@/components/layouts/GetStartedSection";
import { Hero } from "@/components/layouts/Hero";
import { InsightsSection } from "@/components/layouts/InsightsSection";
import { MetricsSection } from "@/components/layouts/MetricsSection";
import { Footer } from "@/components/navigation/Footer";
import { NavBar } from "@/components/navigation/NavBar";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, [])
  if (!pageLoaded) return (
    <div className="w-screen h-screen flex justify-center items-center">
    </div>
  )
  return (
    <AnimatePresence mode="sync" initial={true}>
      <main >
        <NavBar />
        <Hero />
        <MetricsSection />
        <EfficiencySection />
        <InsightsSection />
        <DataControl />
        <GetStartedSection />
        <Footer />
      </main>
    </AnimatePresence>
  );
}
