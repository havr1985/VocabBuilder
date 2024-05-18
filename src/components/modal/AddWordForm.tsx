import { addWordField, addWordValSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useAppSelector } from "@/services/hooks";
import { selectAllCategories } from "@/services/slices/categoriesSlice";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import ukr from "@/assets/ukraine.png";
import gbr from "@/assets/united.png";
import { useAddWordMutation } from "@/services/api/words/wordApi";


export const AddWordForm = () => {
  const allCategories = useAppSelector(selectAllCategories);
  const [isVerb, setIsVerb] = useState(false);
  const [addWord] = useAddWordMutation() 
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<addWordField>({
    mode: "onBlur",
    defaultValues: {
      category: "",
      isIrregular: false,
      ua: "",
      en: "",
    },
    resolver: zodResolver(addWordValSchema),
  });
  const onSubmit: SubmitHandler<addWordField> = (data) => {
    if (data.category === "verb") {
      addWord(data);
    } else {
      addWord({
        category: data.category,
        en: data.en,
        ua: data.ua,
      })
    }
    
    console.log(data)
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-full md:w-1/3">
        <Select
          {...register("category")}
          onValueChange={(selectedOption) => {
            setValue("category", selectedOption);
            if (selectedOption === "verb") {
              setIsVerb(true);
            } else {
              setIsVerb(false);
            }
          }}
        >
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
      {isVerb && (
        <div className=" mt-2">
          <RadioGroup
            {...register("isIrregular")}
            defaultValue="regular"
            onValueChange={(selected) => {
              if (selected === "irregular") {
                setValue("isIrregular", true);
              } else setValue("isIrregular", false);
            }}
            className=" flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="regular" id="regular" />
              <Label
                htmlFor="regular"
                className=" text-prim-white text-xs md:text-base"
              >
                Regular
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="irregular" id="irregular" />
              <Label
                htmlFor="irregular"
                className=" text-prim-white text-xs md:text-base"
              >
                Irregular
              </Label>
            </div>
          </RadioGroup>
          <p className=" text-xs text-prim-white mt-1">
            Such data must be entered in the format I form-II form-III form.
          </p>
        </div>
      )}
      <div className=" mt-8 flex flex-col gap-4">
        <div className=" flex flex-col gap-2 md:flex-row-reverse md:justify-end md:gap-x-8 md:items-center">
          <Label
            htmlFor="ua"
            className=" text-prim-white text-sm font-medium flex items-center gap-x-2 md:text-base"
          >
            <img src={ukr} alt="Ukraine" className=" w-7 h-7 md:w-8 md:h-8" />
            Ukrainian
          </Label>
          <Input
            {...register("ua")}
            id="ua"
            className=" text-prim-white md:w-2/3"
          />
        </div>
        <p className=" text-xs text-red-500">{errors.ua?.message}</p>
        <div className=" flex flex-col gap-2 md:flex-row-reverse md:justify-end md:gap-x-8 md:items-center">
          <Label
            htmlFor="en"
            className=" text-prim-white text-sm font-medium flex items-center gap-x-2 md:text-base"
          >
            <img src={gbr} alt="Kingsdom" className=" w-7 h-7 md:w-8 md:h-8" />
            English
          </Label>
          <Input
            {...register("en")}
            id="en"
            className=" text-prim-white md:w-2/3"
          />
        </div>
        <p className=" text-xs text-red-500">{errors.en?.message}</p>
      </div>

      <div className=" w-full flex gap-x-2 mt-8">
        <Button type="submit" variant="secondary" className=" w-[50%]">
          Add
        </Button>
        <Button
          type="button"
          variant="cancel"
          onClick={() => reset()}
          className=" w-[50%]"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
