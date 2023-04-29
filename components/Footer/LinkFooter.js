import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <li>
      <Link href={props.href} className="hover:underline">
        {props.children}
      </Link>
    </li>
  );
}
