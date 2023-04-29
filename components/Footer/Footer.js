import Container from "../Container";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";
import Sosmed from "./Sosmed";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Twittere from "./Icon/Twitter";
import LogoFooter from "./LogoFooter";
import Button from "../Button";
import Line from "./Icon/Line";

export default function Footer() {
  return (
    <>
      <footer className="mt-24 bg-primary-sec">
        <Container>
          <div className="flex justify-between pt-8 pb-7">
            <div className="w-[307px]">
              <LogoFooter />
              <p className="mt-6 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                sollicitudin malesuada cras egestas gravida. Quis potenti
                suspendisse aliquet consectetur egestas et.
              </p>
            </div>
            <ItemFooter title="Legalitas">
              <LinkFooter href="/">Kebijakan Privasi</LinkFooter>
              <LinkFooter href="/">Persyaratan Layanan</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Jelajahi">
              <LinkFooter href="/">Kursus</LinkFooter>
              <LinkFooter href="/">Beasiswa</LinkFooter>
              <LinkFooter href="/">Tour</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Perusahaan">
              <LinkFooter href="/">Hubungi Kami</LinkFooter>
              <LinkFooter href="/">Tentang Kami</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Newsletter">
              <li>
                <p>
                  Dapatkan pembaruan yang menarik <br /> dari kami
                </p>
              </li>
              <li>
                <input
                  type="email"
                  placeholder="email Anda"
                  className="px-4 py-[10px] outline-none focus:outline-primary rounded-[5px]"
                />
              </li>
              <li>
                <Button variant="blue">Subscribe</Button>
              </li>
            </ItemFooter>
          </div>
        </Container>
      </footer>
      <Container>
        <div className="flex justify-between py-[14px] items-center">
          <p className="text-xs font-roboto">
            Copyright 2021 Hak Cipta Terpelihara oleh Hangeulin
          </p>
          <ul className="flex gap-4 ">
            <Sosmed href="/">
              <Facebook />
            </Sosmed>
            <Sosmed href="/">
              <Instagram />
            </Sosmed>
            <Sosmed href="/">
              <Twittere />
            </Sosmed>
            <Sosmed href="/">
              <Line />
            </Sosmed>
          </ul>
        </div>
      </Container>
    </>
  );
}
