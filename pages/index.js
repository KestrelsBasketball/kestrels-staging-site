import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DesktopHero from "@/components/Heros/Desktop-Hero";
import Sponsors from "@/components/Sponsors/sponsors";
import Fixtures from "@/components/Fixtures/Fixtures-Limited";
import ResultsLimited from "@/components/Results/Results-Limited";
import Douments from "@/components/Documents/Douments";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DesktopHero />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <Fixtures />
      </div>
      <div>
        <ResultsLimited />
      </div>
      <div>
        <Douments />
      </div>
    </div>
  );
}
