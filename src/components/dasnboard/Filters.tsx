import { useAppSelector } from "@/services/hooks";
import { Input } from "../ui/input";
import { debounce } from "lodash";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectAllCategories } from "@/services/slices/categoriesSlice";
import { GoSearch } from "react-icons/go";
import { useUsersWordsQuery } from "@/services/api/words/wordApi";
import { useEffect, useState } from "react";

export const Filters = () => {
  const allCategories = useAppSelector(selectAllCategories);
  const [keyword, setKeyword] = useState("");
  const [debounceKeyword, setDebounceKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  

  const { data, isLoading } = useUsersWordsQuery({ keyword: debounceKeyword || "", category:selectedCategory });
  console.log(data);

  useEffect(() => {
    const handler = debounce((query: string) => {
      
      setDebounceKeyword(query);
    }, 300);
    handler(keyword.trim());
    
    return () => {
      handler.cancel();
    };
  }, [keyword]);

  

  return (
    <div className=" flex flex-col gap-2 pt-4">
      {isLoading && <div>Loading...</div>}
      <div className=" relative">
        <Input
          type="text"
          placeholder="Find the word"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <GoSearch className=" absolute top-3 right-6" />
      </div>
      <div className=" w-full">
        <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value === 'all' ? "" : value)}>
          <SelectTrigger className="w-full text-prim-black border-slate-200">
            <SelectValue placeholder="Categories"  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
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
