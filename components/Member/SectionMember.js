import Image from "next/image";
import Container from "../Container";
import Avatar from "@/public/Avatar.png";
import Member from "@/public/Member.png";

export default function SectionMember() {
  return (
    <section className="mt-24">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <h2 className="font-semibold text-[32px] w-8/12">
              Apa yang member kami katakan
            </h2>
            <p className="pr-5 mt-3 mb-6">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tempor, nulla iaculis eget id arcu est cras. Purus at interdum est
              in lorem aliquam. Arcu, enim purus cras commodo aliquam purus a,
              justo nulla. Quis duis vulputate egestas dictum et in risus
              curabitur enim. Risus non semper pellentesque ornare accumsan
              malesuada. Risus leo erat neque rhoncus egestas id imperdiet.
              Dictum sed tristique lacus, ut vulputate dapibus elit. Gravida
              donec amet, non donec praesent diam gravida.&quot;
            </p>
            <div className="flex gap-5">
              <Image src={Avatar} alt="Avatar" />
              <div>
                <h6>Davis Franci</h6>
                <p className="text-sm font-light">
                  Palembang, Sumatera Selatan
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-6/12">
            <Image src={Member} alt="Member" />
          </div>
        </div>
      </Container>
    </section>
  );
}
