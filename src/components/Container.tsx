import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
    return <div className=" container mx-auto px-4 md:px-8 xl:px-[100px]">{children}</div>;
};
