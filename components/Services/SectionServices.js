import Container from "../Container";
import CardServices from "./CardServices";
import Services1 from "./Icon/Services1";
import Services2 from "./Icon/Services2";
import Services3 from "./Icon/Services3";
import Services4 from "./Icon/Services4";
import Play from "./Play";

export default function SectionServices() {
  return (
    <article className="pt-24">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <h2 className="text-[36px] font-medium">
              Layanan Kami Dalam Membantu Anda
            </h2>
            <div
              className="mt-6 grid max-w-[528px] h-[349px] place-items-center rounded-[10px]"
              style={{
                background: "url(/Services.png)",
                backgroundSize: "cover",
              }}
            >
              <Play />
            </div>
          </div>
          <div className="flex flex-wrap w-6/12 gap-y-6">
            <CardServices
              icon={<Services1 />}
              title="Materi Update"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardServices
              icon={<Services2 />}
              title="Akses Selamanya"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardServices
              icon={<Services3 />}
              title="Sertifikasi Kompeten"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardServices
              icon={<Services4 />}
              title="Pengajar Berpengalaman"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
