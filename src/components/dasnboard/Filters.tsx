import { useAppSelector } from "@/services/hooks";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectAllCategories } from "@/services/slices/categoriesSlice";
import { GoSearch } from "react-icons/go";
import { useUsersBooksQuery } from "@/services/api/words/wordApi";

export const Filters = () => {
    const allCategories = useAppSelector(selectAllCategories);
    const { data } = useUsersBooksQuery();
    console.log(data)

  return (
    <div className=" flex flex-col gap-2 pt-4">
      <div className=" relative">
        <Input type="text" placeholder="Find the word" />
        <GoSearch className=" absolute top-3 right-6" />
      </div>
      <div className=" w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            {allCategories.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
