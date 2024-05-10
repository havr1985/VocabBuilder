
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import LoginForm from "@/components/auth/LoginForm";

const LoginPages = () => {
  return (
    <main>
      <Container>
        <Logo />
        <LoginForm />
      </Container>
    </main>
  );
};

export default LoginPages;
