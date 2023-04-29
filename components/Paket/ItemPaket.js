export default function ItemPaket(props) {
  return (
    <li className="flex items-center gap-4">
      <div
        className={`w-[35px] h-[35px] rounded-full  grid place-items-center ${
          props.special ? "bg-primary-sec-2" : "bg-primary"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="14"
          fill="none"
          viewBox="0 0 20 14"
        >
          <path
            fill="#000"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.53.97a.75.75 0 010 1.06l-11 11a.75.75 0 01-1.06 0l-5-5a.75.75 0 011.06-1.06L7 11.44 17.47.97a.75.75 0 011.06 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <p>{props.children}</p>
    </li>
  );
}
