import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-6">
      <LinkNav href="#">Kursus </LinkNav>
      <LinkNav href="#">Beasiswa</LinkNav>
      <LinkNav href="#">Travel</LinkNav>
      <LinkNav href="#">Tentang Kami</LinkNav>
    </ul>
  );
}
