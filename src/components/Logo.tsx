import logo from "@/assets/Craftwork.png";

export const Logo = () => {
  return (
    <div className=" flex gap-x-4 items-center">
      <img src={logo} alt="logo" className=" w-9 h-9" />
      <p className=" text-lg font-semibold">VocabBuilder</p>
    </div>
  );
};
