import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AddWord } from "../modal/AddWord";
import { useAppSelector } from "@/services/hooks";
import { selectAllUserWords } from "@/services/slices/userWordsSlice";

export const HelperBoard = () => {
  const { results } = useAppSelector(selectAllUserWords);
  return (
    <div>
      <div className=" flex items-center gap-x-2">
        <p className=" text-[#12141780] text-sm">To stady:</p>
        <p className=" text-prim-black text-xl">{results.length}</p>
      </div>
      <div className=" flex gap-x-4 mt-3">
        <AddWord />
        <Link to="/training" className=" flex items-center gap-x-2 ">
          Train oneself <IoIosArrowRoundForward className=" text-prim-green" />
        </Link>
      </div>
    </div>
  );
};
