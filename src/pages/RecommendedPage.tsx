import { Container } from "@/components/Container";
import { PaginationTable } from "@/components/PaginationTable";
import { WordsTable } from "@/components/WordsTable/WordsTable";
import { Dashboard } from "@/components/dasnboard/Dashboard";
import { useOtherWordsQuery } from "@/services/api/words/wordApi";
import { useAppSelector } from "@/services/hooks";
import { selectFilters } from "@/services/slices/filtersSlice";
import { selectPage } from "@/services/slices/paginationSlice";


const RecommendedPage = () => {
  const page = useAppSelector(selectPage);
  const { keyword, category, isIrregular } = useAppSelector(selectFilters);
  const { isError } = useOtherWordsQuery({
    keyword: keyword || "",
    category,
    isIrregular,
    page,
  });
  return (
    <main>
      <main className=" bg-sec-white mt-4 h-screen">
        <Container>
          <section className=" flex flex-col gap-8">
            {isError && <div>Error</div>}
            <Dashboard />
            <WordsTable />
            <PaginationTable />
          </section>
        </Container>
      </main>
    </main>
  );
}

export default RecommendedPage
