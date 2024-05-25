import { useCategoriesQuery } from "@/services/api/words/wordApi"
import { Filters } from "./Filters";
import { HelperBoard } from "./HelperBoard";


export const Dashboard = () => {
  const { data } = useCategoriesQuery();
  console.log(data)
  return (
    <div className=" flex flex-col gap-10 md:gap-8">
      <Filters />
      <HelperBoard/>
    </div>
  )
}
