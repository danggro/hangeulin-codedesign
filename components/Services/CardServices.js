export default function CardServices(props) {
  return (
    <div className="w-6/12">
      {props.icon}
      <h6 className="mt-4 mb-2 font-medium">{props.title}</h6>
      <p className="text-sm font-light text-black/80">{props.desc}</p>
    </div>
  );
}
