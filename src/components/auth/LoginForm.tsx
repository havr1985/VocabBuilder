import { LoginFields, LoginValSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import { Description } from "./Description";
import { Background } from "./Background";
import { useLoginMutation } from "@/services/api/auth/userApi";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isError }] = useLoginMutation();

  const handleToglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFields>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginValSchema),
  });
  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data);
    reset();
  };

  return (
    <div className=" xl:flex flex-row-reverse xl:mt-[84px] xl:gap-x-20">
      {isError && toast.error("Invalid email or password ! Try again !")}
      <Background />
      <div className=" sm:mt-5">
        <div
          className=" bg-[#85AA9F1A] rounded-t-3xl py-8 px-2 h-screen md:mt-[140px] md:h-auto md:max-w-[627px] md:px-16 md:py-12
     md:rounded-3xl md:mx-auto xl:mt-0"
        >
          <div className=" flex flex-col gap-4 md:gap-5">
            <h1 className=" text-prim-black text-3xl font-bold md:text-4xl">
              Login
            </h1>
            <p className=" text-[#121417CC] text-base md:text-xl">
              Please enter your login details to continue using our service:
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-4 flex flex-col gap-3.5 md:mt-5 md:gap-5"
          >
            <div>
              <Input {...register("email")} placeholder="Email" />
              <p className=" mt-2 text-sm text-red-500 pl-2">
                {errors.email?.message}
              </p>
            </div>
            <div className=" relative">
              <Input
                {...register("password")}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <p className=" mt-2 text-sm text-red-500 pl-2">
                {errors.password?.message}
              </p>
              <button
                type="button"
                onClick={handleToglePassword}
                className=" absolute top-3.5 right-4"
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </button>
            </div>
            <div className=" flex flex-col gap-4">
              <Button type="submit" className=" mt-4 md:text-lg">
                Login
              </Button>
              <Link
                to="/register"
                className=" mx-auto text-[#12141780] font-bold underline"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
        <div className=" hidden md:flex md:justify-center md:my-[98px] xl:mt-4">
          <Description />
        </div>
      </div>
    </div>
  );
}
