import { Filters } from "./Filters";
import { HelperBoard } from "./HelperBoard";
import { useCategoriesQuery } from "@/services/api/words/wordApi";

export const Dashboard = () => {
  const { isError: categoryError } = useCategoriesQuery();

  return (
    <div className=" flex flex-col gap-10 md:gap-8">
      {categoryError && <div>Error</div>}
      <Filters />
      <HelperBoard />
    </div>
  );
};
