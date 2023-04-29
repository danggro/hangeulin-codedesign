import Link from "next/link";

export default function Sosmed(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="w-[30px] h-[30px] rounded-full grid place-items-center border border-[#474747] hover:border-primary-sec text-[#474747] hover:text-primary-sec"
      >
        {props.children}
      </Link>
    </li>
  );
}
