
import RegisterForm from "@/components/auth/RegisterForm";
import logo from "@/assets/Craftwork.png";


const RegisterPages = () => {
  return (
    <main>
      <div className=" flex gap-x-4 items-center ">
        <img src={logo} alt="logo" className=" w-9 h-9" />
        <p className=" text-lg font-semibold">VocabBuilder</p>
      </div>
      
      <RegisterForm />
    </main>
  );
}

export default RegisterPages;