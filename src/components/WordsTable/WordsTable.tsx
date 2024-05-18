import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

import { useAppSelector } from "@/services/hooks";
import { selectAllUserWords } from "@/services/slices/userWordsSlice";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

export const WordsTable = () => {
  const { results } = useAppSelector(selectAllUserWords);

  return (
    <Table>
      <TableHeader className=" bg-[#85AA9F1A] text-prim-black">
        <TableRow>
          <TableHead className="w-[82px]">Words</TableHead>
          <TableHead className=" w-[116px]">Translation</TableHead>
          <TableHead className=" w-[95px]">Progress</TableHead>
          <TableHead className=" w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" bg-prim-white">
        {results.map((item) => (
          <TableRow key={item._id}>
            <TableCell className=" text-xs font-medium">{item.en}</TableCell>
            <TableCell className=" text-xs">{item.ua}</TableCell>
            <TableCell>
              <Progress value={25 * item.progress} />
            </TableCell>
            <TableCell className="text-center">
              <Popover>
                <PopoverTrigger>...</PopoverTrigger>
                <PopoverContent align="end" className=" bg-white py-3 px-6 z-50 rounded-xl">
                            <p>Edit</p>
                            <p>Delete</p>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
