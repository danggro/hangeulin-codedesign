import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import HeroPic from "@/public/Hero.png";

export default function SectionHero() {
  return (
    <section className="pt-12">
      <Container>
        <main className="flex items-center">
          <div className="w-5/12">
            <h1 className="font-bold text-[42px]  ">
              Solusi <span className="text-blue">Terbaik</span> Untuk Belajar
              Bahasa Korea
            </h1>
            <p className="pr-5 mt-4 font-light mb-7 text-secondary">
              Kursus online gratis yang menyediakan beragam fasilitas dan dapat
              membantu dalam mengasah kemampuan berbahasa koreamu
            </p>
            <Button variant="yellow">Gabung Sekarang</Button>
          </div>
          <div className="flex justify-end w-7/12">
            <Image src={HeroPic} alt="HeroPic" />
          </div>
        </main>
      </Container>
    </section>
  );
}
