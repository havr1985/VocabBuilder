import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

import ukr from "@/assets/ukraine.png";
import gbr from "@/assets/united.png";

import { useAppSelector } from "@/services/hooks";
import { selectAllUserWords } from "@/services/slices/userWordsSlice";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteWordMutation } from "@/services/api/words/wordApi";
import { useLocation } from "react-router-dom";

export const WordsTable = () => {
  const { results } = useAppSelector(selectAllUserWords);
  const [deleteWords] = useDeleteWordMutation();
  const location = useLocation();

  return (
    <Table>
      <TableHeader className=" bg-[#85AA9F1A] text-prim-black md:text-lg md:font-medium">
        <TableRow className=" ">
          <TableHead className=" md:py-4">
            <h2 className=" flex justify-between items-center">
              Words{" "}
              <img
                src={gbr}
                alt="kingsdom"
                className=" hidden md:block md:w-8 md:h-8"
              />
            </h2>
          </TableHead>
          <TableHead className=" ">
            <h2 className=" flex justify-between items-center">
              Translation{" "}
              <img
                src={ukr}
                alt="ukraine"
                className=" hidden md:block md:w-8 md:h-8"
              />
            </h2>
          </TableHead>
          {location.pathname === "/" && (
            <TableHead className=" hidden xl:block xl:pt-4">
              <h2>Category</h2>
            </TableHead>
          )}

          <TableHead className="">
            {location.pathname === "/" ? (
              <span>Progress</span>
            ) : (
              <span>Category</span>
            )}
          </TableHead>

          <TableHead className=" "></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" bg-prim-white">
        {results.map((item) => (
          <TableRow key={item._id}>
            <TableCell className=" text-xs font-medium md:text-base">
              {item.en}
            </TableCell>
            <TableCell className=" text-xs md:text-base">{item.ua}</TableCell>
            {location.pathname === "/" && (
              <TableCell className=" hidden xl:block xl:text-base">
                {item.category}
              </TableCell>
            )}

            {location.pathname === "/" && item.progress !== undefined ? (
              <TableCell>
                <Progress value={25 * item.progress} />
                <p className=" hidden md:block md:text-center md:font-medium">
                  {25 * item.progress}%
                </p>
              </TableCell>
            ) : (
              <TableCell className="xl:text-base">{item.category}</TableCell>
            )}

            <TableCell className="text-center">
              {location.pathname === "/" ? (
                <Popover>
                  <PopoverTrigger className=" md:text-lg">...</PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className=" bg-white py-3 px-6 z-50 rounded-xl"
                  >
                    <Dialog>
                      <DialogTrigger className="flex items-center gap-x-2 mb-2">
                        <Pencil className=" w-4 h-4 text-prim-green" /> Edit
                      </DialogTrigger>
                      <DialogContent></DialogContent>
                    </Dialog>
                    <button
                      type="button"
                      onClick={() => deleteWords({ id: item._id })}
                      className=" flex items-center gap-x-2"
                    >
                      <Trash2 className=" w-4 h-4 text-prim-green" /> Delete
                    </button>
                  </PopoverContent>
                </Popover>
              ) : (
                <div>p</div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
