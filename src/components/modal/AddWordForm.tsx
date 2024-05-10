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

import { useAppSelector } from "@/services/hooks";
import { selectAllCategories } from "@/services/slices/categoriesSlice";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const AddWordForm = () => {
    const allCategories = useAppSelector(selectAllCategories);
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
      ukrainian: "",
      english: "",
    },
    resolver: zodResolver(addWordValSchema),
  });
  const onSubmit: SubmitHandler<addWordField> = (data) => {
    console.log(data);
    reset();
  };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <Select {...register("category")} onValueChange={(selectedOption) => setValue('category', selectedOption)} >
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
        <div>
          <Label htmlFor="ukrainian">Ukrainian</Label>
          <Input {...register("ukrainian")} id="ukrainian" />
          <p>{errors.ukrainian?.message}</p>
        </div>
        <div>
          <Label htmlFor="english">English</Label>
          <Input {...register("english")} id="english" />
          <p>{errors.english?.message}</p>
            </div>
            <div>
                <Button type="submit">Add</Button>
                <Button>Cancel</Button>
            </div>
      </form>
    );
};
