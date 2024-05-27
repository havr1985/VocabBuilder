import { useAppDispatch, useAppSelector } from "@/services/hooks";
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
import { useEffect, useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { ChangeFilters } from "@/services/slices/filtersSlice";
import { ChangePage } from "@/services/slices/paginationSlice";

export const Filters = () => {
  const allCategories = useAppSelector(selectAllCategories);
  const dispatch = useAppDispatch();

  const [keyword, setKeyword] = useState("");
  const [debounceKeyword, setDebounceKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isIrregular, setIsIrregular] = useState<boolean | string>("");
  const isMounted = useRef(false)

  useEffect(() => {
    const handler = debounce((query: string) => {
      setDebounceKeyword(query);
    }, 500);
    handler(keyword.trim());
    
    return () => {
      handler.cancel();
    };
  }, [keyword]);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(
        ChangeFilters({ debounceKeyword, selectedCategory, isIrregular })
      );
      dispatch(ChangePage(1))
    } else {
      isMounted.current = true;
    }
    
  }, [debounceKeyword, selectedCategory, isIrregular, dispatch]);

  return (
    <div className=" flex flex-col gap-2 md:pt-10 md:flex-row md:items-center ">
      <div className=" relative md:w-[246px]">
        <Input
          type="text"
          placeholder="Find the word"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <GoSearch className=" absolute top-3 right-6" />
      </div>
      <div className=" w-full md:w-[156px]">
        <Select
          value={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value === "all" ? "" : value);
            value === "verb" && setIsIrregular(false);
            value !== "verb" && setIsIrregular("");
          }}
        >
          <SelectTrigger className="w-full text-prim-black border-slate-200">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {allCategories.map((item) => (
              <SelectItem key={item} value={item} >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {selectedCategory === "verb" && (
        <div className=" ">
          <RadioGroup
            defaultValue="regular"
            onValueChange={(selected) => {
              if (selected === "irregular") {
                setIsIrregular(true);
              } else setIsIrregular(false);
            }}
            className=" flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="regular"
                id="regular"
                className=" text-prim-green border-prim-green"
              />
              <Label
                htmlFor="regular"
                className=" text-prim-black text-xs md:text-sm md:font-normal"
              >
                Regular
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="irregular"
                id="irregular"
                className=" text-prim-green border-prim-green"
              />
              <Label
                htmlFor="irregular"
                className=" text-prim-black text-xs md:text-sm md:font-normal"
              >
                Irregular
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}
    </div>
  );
};
