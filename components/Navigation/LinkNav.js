export default function LinkNav(props) {
  return (
    <li>
      <a href={props.href} className="font-medium hover:underline">
        {props.children}
      </a>
    </li>
  );
}
