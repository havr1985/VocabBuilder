import { Container } from "@/components/Container";
import { Dashboard } from "@/components/dasnboard/Dashboard";



const HomePages = () => {
  return (
    <main className=" bg-sec-white mt-4">
      <Container>
        <section >
          <Dashboard />
        </section>
      </Container>
    </main>
  );
}

export default HomePages;