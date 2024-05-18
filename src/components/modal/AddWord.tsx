import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoPlus } from "react-icons/go";
import { AddWordForm } from "./AddWordForm";

export const AddWord = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-x-2">
        Add word <GoPlus className=" text-prim-green" />
      </DialogTrigger>
      <DialogContent>
        <h2 className=" text-2xl text-prim-white font-semibold md:text-4xl md:mb-5">Add word</h2>
        <p className=" text-prim-white md:text-xl">
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
              </p>
              <AddWordForm/>
      </DialogContent>
    </Dialog>
  );
};
