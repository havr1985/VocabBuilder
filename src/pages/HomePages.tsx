import { Container } from "@/components/Container";
import { WordsTable } from "@/components/WordsTable/WordsTable";
import { Dashboard } from "@/components/dasnboard/Dashboard";



const HomePages = () => {
  return (
    <main className=" bg-sec-white mt-4">
      <Container>
        <section className=" flex flex-col gap-8" >
          <Dashboard />
          <WordsTable/>
        </section>
      </Container>
    </main>
  );
}

export default HomePages;