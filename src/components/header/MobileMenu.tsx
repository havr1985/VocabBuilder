import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { NavMenu } from "./NavMenu";
import picture from "@/assets/illustration.png";
import { GoArrowRight } from "react-icons/go";

type Props = {
  name: string;
};

export const MobileMenu = ({ name }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className=" xl:hidden">
        <RiMenu3Fill className=" w-8 h-6" />
      </SheetTrigger>
      <SheetContent className=" flex flex-col justify-between">
        <div className=" flex items-center gap-x-4">
          <p className=" font-medium text-prim-white">{name}</p>
          <Avatar className=" h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <NavMenu />
          <button type="button" className=" flex items-center gap-x-2 text-sm mt-7 text-prim-white">
            Log out <GoArrowRight />
          </button>
        </div>
        <div>
          <img
            src={picture}
            alt="children"
            className=" w-[363px] h-[318px] object-cover object-center"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
