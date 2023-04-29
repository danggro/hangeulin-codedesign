export default function ItemFooter(props) {
  return (
    <div className="mt-1">
      <h5 className="text-lg font-medium">{props.title}</h5>
      <ul className="mt-6 space-y-3">{props.children}</ul>
    </div>
  );
}
