import Button from "../Button";
import Container from "../Container";

export default function SectionJoin() {
  return (
    <section className="pt-24">
      <Container>
        <div className="bg-primary rounded-[10px] p-12 ">
          <div className="flex items-center justify-between">
            <div className="w-6/12 ">
              <h2 className="font-semibold text-[28px] mb-6">Siap Bergabung</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices laoreet eget in id donec arcu nunc. Tortor risus
                adipiscing elit euismod montes, eget. Purus diam ultricies sed
                adipiscing at feugiat purus.
              </p>
            </div>
            <div className="flex h-fit">
              <Button variant="blue">Gabung Sekarang</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
