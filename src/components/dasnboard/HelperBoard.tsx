import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AddWord } from "../modal/AddWord";
import { useAppSelector } from "@/services/hooks";
import { selectAllUserWords } from "@/services/slices/userWordsSlice";

export const HelperBoard = () => {
  const { results } = useAppSelector(selectAllUserWords);
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className=" md:flex md:items-center md:gap-x-4">
      <div className=" flex items-center gap-x-2">
        <p className=" text-[#12141780] text-sm md:text-base">To stady:</p>
        <p className=" text-prim-black text-xl">{results.length}</p>
      </div>
      <div className=" flex gap-x-4 mt-3 md:mt-0">
        {location.pathname === "/" && <AddWord />}
        <Link to="/training" className=" flex items-center gap-x-2 ">
          Train oneself <IoIosArrowRoundForward className=" text-prim-green" />
        </Link>
      </div>
    </div>
  );
};
