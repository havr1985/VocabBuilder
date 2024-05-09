import logo from "@/assets/Craftwork.png";

export const Logo = () => {
  return (
    <div className=" flex gap-x-2 items-center md:gap-x-4">
      <img src={logo} alt="logo" className=" w-9 h-9" />
      <p className=" text-base font-semibold md:text-lg">VocabBuilder</p>
    </div>
  );
};
