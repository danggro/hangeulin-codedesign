export default function CardPaket(props) {
  return (
    <div
      className={` w-4/12 rounded-[15px] text-center p-6 ${
        props.special ? "bg-primary" : "bg-primary-sec-2"
      }`}
    >
      <p className="mb-6 text-2xl font-semibold">{props.paket}</p>

      <ul className={`space-y-4`}>{props.children}</ul>
      <button
        className={`px-[13px] py-[10px] hover:opacity-75 font-medium bg-button  rounded-[5px]  mt-8 ${
          props.special ? " blue-btn text-white" : "yellow-btn"
        }`}
      >
        Beli Kelas
      </button>
    </div>
  );
}
