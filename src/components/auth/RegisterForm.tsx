import { RegisterFields, RegisterValSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFields>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterValSchema),
  });
  const onSubmit: SubmitHandler<RegisterFields> = (data) => console.log(data);

  return (
    <div className=" bg-[#85AA9F1A] rounded-t-3xl py-8 px-2 h-screen ">
      <div className=" flex flex-col gap-4">
        <h1 className=" text-prim-black text-3xl font-bold">Register</h1>
        <p className=" text-[#121417CC] text-base">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mt-4 flex flex-col gap-3.5"
      >
        <div>
          <Input {...register("name")} placeholder="Name" />
          <p className=" mt-2 text-sm text-red-500 pl-2">
            {errors.name?.message}
          </p>
        </div>
        <div>
          <Input {...register("email")} placeholder="Email" />
          <p className=" mt-2 text-sm text-red-500 pl-2">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <Input {...register("password")} placeholder="Password" />
          <p className=" mt-2 text-sm text-red-500 pl-2">
            {errors.password?.message}
          </p>
        </div>

        <Button type="submit" className=" mt-4">
          Register
        </Button>
      </form>
    </div>
  );
}
