import { useAppSelector } from "@/services/hooks";
import { Logo } from "../Logo";
import { selectCurrentUser } from "@/services/slices/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MobileMenu } from "./MobileMenu";
import { NavMenu } from "./NavMenu";
import { GoArrowRight } from "react-icons/go";

export const Header = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <header className=" flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className=" hidden xl:flex">
        <NavMenu />
      </div>
      <div className=" flex items-center gap-x-2 xl:gap-x-4">
        <p className=" font-medium xl:text-xl">{user.name}</p>
        <Avatar className=" h-9 w-9 xl:h-12 xl:w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <MobileMenu name={user.name} />
        <button
          type="button"
          className=" hidden xl:flex xl:items-center xl:gap-x-2  xl:text-prim-black xl:text-base"
        >
          Log out <GoArrowRight />
        </button>
      </div>
    </header>
  );
};
