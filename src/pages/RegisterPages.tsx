import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPages = () => {
  return (
    <main>
      <Container>
        <Logo />
        <RegisterForm />
      </Container>
    </main>
  );
};

export default RegisterPages;
