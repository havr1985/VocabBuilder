import logo from "@/assets/Craftwork.png";
import LoginForm from "@/components/auth/LoginForm";

const LoginPages = () => {
  return (
    <main>
      <div className=" flex gap-x-4 items-center mt-4">
        <img src={logo} alt="logo" className=" w-9 h-9" />
        <p className=" text-lg font-semibold">VocabBuilder</p>
      </div>
      <LoginForm />
    </main>
  );
};

export default LoginPages;
