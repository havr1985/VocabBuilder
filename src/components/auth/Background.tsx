import pictutre from "@/assets/illustration.png";

export const Background = () => {
  return (
    <>
      <div className=" flex justify-center mt-3 md:hidden xl:block">
        <img src={pictutre} alt="children" className=" w-[247px] h-[191px] xl:w-[498px] xl:h-[435px]" />
      </div>
    </>
  );
};
