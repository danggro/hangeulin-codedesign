import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import SectionJoin from "@/components/Join/SectionJoin";
import SectionMember from "@/components/Member/SectionMember";
import NavBar from "@/components/Navigation/NavBar";
import SectionPaket from "@/components/Paket/SectionPaket";
import SectionServices from "@/components/Services/SectionServices";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hangeulin</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionServices />
      <SectionPaket />
      <SectionMember />
      <SectionJoin />
      <Footer />
    </>
  );
}
