import { useAppSelector } from "@/services/hooks";
import { selectIsAuthUser } from "@/services/slices/authSlice";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  component: ReactNode;
  redirectTo: string;
};

export const PrivateRoutes = ({ component: Component, redirectTo }: Props) => {
  const isAuth = useAppSelector(selectIsAuthUser);

  return isAuth ? Component : <Navigate to={redirectTo} />;
};
