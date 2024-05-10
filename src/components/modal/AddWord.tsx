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
        <h2>Add word</h2>
        <p>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
              </p>
              <AddWordForm/>
      </DialogContent>
    </Dialog>
  );
};
