import { BsDot } from "react-icons/bs";

export const Description = () => {
  const desc = ["Word", "Translation", "Grammar", "Progress"];
    return (
      <ul className=" flex justify-center">
        {desc.map((item, idx) => (
          <li key={idx} className=" flex items-center">
            <p className=" text-[#121417CC] text-sm">{item}</p>
            <BsDot />
          </li>
        ))}
      </ul>
    );
};
