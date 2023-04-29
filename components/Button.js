export default function Button(props) {
  const variants = {
    yellow: "yellow-btn",
    blue: "blue-btn text-white",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} px-[13px] py-[10px] hover:opacity-75 font-medium bg-button  rounded-[5px]`}
    >
      {props.children}
    </button>
  );
}
