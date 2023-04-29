import Container from "../Container";
import CardPaket from "./CardPaket";
import ItemPaket from "./ItemPaket";

export default function SectionPaket(props) {
  return (
    <section className="pt-24">
      <Container>
        <div className="w-6/12 mx-auto text-center">
          <h3 className="font-bold text-[36px] font-roboto">Pilih Paket</h3>
          <p className="mt-4 font-roboto">
            Quisque aliquam, faucibus est massa phasellus turpis pellentesque
            nam tristique. Facilisi varius sed ridiculus cras lacus. Elementum
            in in convallis sit vitae donec amet.
          </p>
        </div>
        <div className="flex items-center gap-6 mt-6">
          <CardPaket paket="Paket 1">
            <ItemPaket>Vitae sagittis</ItemPaket>
            <ItemPaket>Quis ipsu gravida in</ItemPaket>
            <ItemPaket>Nibh mauirs erat tristique sagittis nunc</ItemPaket>
            <ItemPaket>Tellus nunc fermentum eget eu</ItemPaket>
            <ItemPaket>Portittor egestasa labortis elit</ItemPaket>
            <ItemPaket>Consequat sed id ornare adio</ItemPaket>
          </CardPaket>
          <CardPaket paket="Paket 2" special>
            <ItemPaket special>Vitae sagittis</ItemPaket>
            <ItemPaket special>Quis ipsu gravida in</ItemPaket>
            <ItemPaket special>
              Nibh mauirs erat tristique sagittis nunc
            </ItemPaket>
            <ItemPaket special>Tellus nunc fermentum eget eu</ItemPaket>
            <ItemPaket special>Portittor egestasa labortis elit</ItemPaket>
            <ItemPaket special>Consequat sed id ornare adio</ItemPaket>
            <ItemPaket special>Consequat sed id ornare adio</ItemPaket>
            <ItemPaket special>Consequat sed id ornare adio</ItemPaket>
          </CardPaket>
          <CardPaket paket="Paket 3">
            <ItemPaket>Vitae sagittis</ItemPaket>
            <ItemPaket>Quis ipsu gravida in</ItemPaket>
            <ItemPaket>Nibh mauirs erat tristique sagittis nunc</ItemPaket>
            <ItemPaket>Tellus nunc fermentum eget eu</ItemPaket>
            <ItemPaket>Portittor egestasa labortis elit</ItemPaket>
            <ItemPaket>Consequat sed id ornare adio</ItemPaket>
          </CardPaket>
        </div>
      </Container>
    </section>
  );
}
